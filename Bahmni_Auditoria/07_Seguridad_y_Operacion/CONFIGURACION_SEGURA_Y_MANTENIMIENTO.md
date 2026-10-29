# Configuración Segura y Mantenimiento Operativo - Bahmni Standard

> **Fuente Oficial:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\bahmni-docker\bahmni-standard\.env`  
> **Composición Docker:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\bahmni-docker\bahmni-standard\docker-compose.yml`  
> **Clasificación:** [Hecho documentado] e [Inferencia técnica]

---

## 1. Gestión Segura de Secretos y Parámetros Sensibles
El despliegue de Bahmni Standard se gobierna mediante variables de entorno especificadas en el archivo `.env`.

### 1.1 Recomendaciones Críticas para Entornos Hospitalarios
1. **Cambio de Contraseñas por Defecto:**
   - `MYSQL_ROOT_PASSWORD`: Modificar el valor por defecto (`adminAdmin!123`) por una clave aleatoria de al menos 20 caracteres con alta entropía.
   - `OPENMRS_DB_PASSWORD`: Modificar el valor por defecto (`password`).
   - `OPENELIS_DB_PASSWORD`: Modificar el valor por defecto (`clinlims`).
   - `ODOO_DB_PASSWORD`: Modificar el valor por defecto (`odoo`).
   - `PACS_DB_ROOT_PASSWORD`: Modificar el valor por defecto (`postgres@123`).
   - `METABASE_ADMIN_PASSWORD`: Modificar el valor por defecto (`Admin@123`).
2. **Cuentas de Sincronización Atomfeed:**
   - Cambiar contraseñas de `OPENMRS_ATOMFEED_PASSWORD`, `OPENELIS_ATOMFEED_PASSWORD` y `ODOO_ATOMFEED_PASSWORD`.
3. **Control de Acceso al Archivo `.env`:**
   - El archivo `.env` contiene credenciales en texto plano. En el servidor de producción debe tener permisos estrictos (`chmod 600 .env`) y pertenecer exclusivamente al usuario administrativo `bahmni`.

---

## 2. Configuración de TLS / SSL (HTTPS)
El tráfico entrante hacia Bahmni es recibido por el contenedor `proxy` (`bahmni/proxy:1.1.0`), el cual actúa como proxy inverso basado en Nginx.
- **Puertos expuestos:** Puerto 80 (HTTP) y Puerto 443 (HTTPS).
- **Montaje de certificados:** Para producción, debe descomentarse el volumen en `docker-compose.yml`:
  ```yaml
  volumes:
    - ${CERTIFICATE_PATH}:/etc/tls:ro
  ```
- **Redirección forzada:** Debe configurarse en Nginx la redirección automática de tráfico HTTP (80) hacia HTTPS (443) con protocolo TLS 1.3 habilitado y cifrados seguros.

---

## 3. Aislamiento de Red Docker
- Todos los servicios de base de datos (`openmrsdb`, `openelisdb`, `odoodb`, `pacsdb`, `reportsdb`, `metabasedb`, `martdb`) se ejecutan dentro de la red interna de Docker compose y **no exponen puertos directamente al host** (excepto Odoo en el 8069 y DCM4CHEE en 8055/11112 cuando se habilitan explícitamente).
- Esto protege las bases de datos de accesos no autorizados provenientes de la red local o internet.

---

## 4. Ciclo de Mantenimiento y Actualizaciones
1. **Verificación de Parches de Seguridad:**
   - En julio de 2026, el equipo oficial de Bahmni publicó la versión parche `1.0.2-standard` (commit `1dfe62c4e5d6f3d702e65d869729726226fceb56`) para corregir vulnerabilidades de seguridad (`BSL-13`, `BSL-14`), elevando la imagen OpenMRS a `1.1.3`.
   - Para aplicar parches, se debe actualizar la etiqueta correspondiente en `.env` y reiniciar los servicios con `docker compose up -d`.
2. **Limpieza de Recursos Huérfanos:**
   - Ejecutar periódicamente `docker image prune -a` y `docker system prune` (sin la bandera `-v` para no borrar volúmenes de datos).
3. **Monitoreo de Recursos:**
   - Métricas de consumo de CPU, memoria y disco deben ser recolectadas con Prometheus / Grafana utilizando los perfiles `node-exporter` y `cadvisor` integrados en Bahmni Standard.
