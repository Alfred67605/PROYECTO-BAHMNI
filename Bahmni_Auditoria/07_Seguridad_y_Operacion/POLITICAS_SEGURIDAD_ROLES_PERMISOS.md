# Políticas de Seguridad, Roles y Permisos - Bahmni Standard

> **Fuentes Oficiales:** 
> - OpenMRS Core RBAC Model (`c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\bahmni-core`)
> - Bahmni Apps Security Directives (`c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\openmrs-module-bahmniapps`)
> - Atlassian Confluence Wiki: User Guide, Manage Users and Roles
> **Clasificación:** [Hecho documentado] e [Inferencia técnica]

---

## 1. Modelo de Control de Acceso (RBAC)
Bahmni Standard implementa un modelo de Control de Acceso Basado en Roles (Role-Based Access Control - RBAC) integrado entre sus componentes mediante el motor de seguridad de OpenMRS, autenticación desacoplada y roles específicos por subsistema (OpenELIS y Odoo).

### 1.1 Entidades de Seguridad en OpenMRS
- **`users`**: Cuentas de usuario con credenciales hash, salt y datos de auditoría (`creator`, `date_created`, etc.).
- **`roles`**: Agrupaciones lógicas de permisos y privilegios. Los roles pueden heredar permisos de otros roles mediante jerarquías (`role_role`).
- **`privileges`**: Permisos atómicos granulares (ej. `Add Patients`, `View Patients`, `Edit Encounters`, `Delete Observations`, `App: Clinical`).
- **`user_role`**: Tabla intermedia que asigna uno o varios roles a cada cuenta de usuario.
- **`role_privilege`**: Tabla intermedia que asocia privilegios específicos a cada rol.

---

## 2. Matriz de Roles y Actores Hospitalarios Documentados

| Rol Hospitalario | Subsistema Principal | Privilegios y Funciones Típicas | Restricciones de Acceso |
|---|---|---|---|
| **Administrador del Sistema** (`System Developer` / `Superuser`) | OpenMRS, OpenELIS, Odoo, Linux/Docker | Configuración global, gestión de conceptos CIEL/SNOMED, migraciones, gestión de usuarios, acceso a consolas | Acceso irrestricto; debe estar estrictamente limitado a personal de TI |
| **Recepcionista / Admisión** (`Registration Clerk`) | Bahmni Registration App | Búsqueda de pacientes, registro de filiación, fotografía, inicio de visita ambulatoria (OPD) | No tiene acceso a evoluciones médicas confidenciales ni validación de laboratorio |
| **Personal de Enfermería** (`Nurse`) | Bahmni Clinical / Inpatient (IPD) | Registro de signos vitales, administración de medicamentos, asignación de camas, notas de enfermería | No puede validar resultados de laboratorio ni autorizar altas médicas finales |
| **Médico General / Especialista** (`Doctor` / `Clinician`) | Bahmni Clinical | Consulta médica, registro de diagnósticos (CIE-10/SNOMED), órdenes de laboratorio, órdenes radiológicas, prescripción de fármacos | No puede facturar directamente ni alterar órdenes validadas de farmacia |
| **Técnico de Laboratorio** (`Lab Technician`) | OpenELIS | Recepción de muestras, registro de resultados de análisis clínicos, ingreso de valores de referencia | No puede modificar prescripciones médicas originales |
| **Director / Patólogo de Laboratorio** (`Lab Manager`) | OpenELIS | Aprobación y validación final de resultados de laboratorio, control de calidad del laboratorio | Acceso restringido al módulo de validación |
| **Farmacéutico / Despacho** (`Pharmacist`) | Odoo / Bahmni Pharmacy | Visualización de recetas, validación de stock, dispensación de medicamentos por lotes | No puede recetar ni alterar la indicación clínica original |
| **Cajero / Facturación** (`Billing User` / `Cashier`) | Odoo Accounting | Generación de cotizaciones, cobro de servicios médicos y fármacos, emisión de facturas y recibos | No puede acceder a detalles clínicos íntimos no relacionados con la prestación facturable |
| **Implementador Hospitalario** (`Implementer`) | Bahmni Implementer Interface | Construcción de formularios clínicos (Form Builder), tableros visuales (Display Controls), configuración de reportes | No debe acceder a datos clínicos operativos en producción |

---

## 3. Autenticación y Cuentas de Servicio Inter-Módulos
Bahmni utiliza usuarios dedicados para la sincronización asíncrona mediante **Atomfeed** entre OpenMRS, OpenELIS y Odoo:
- `OPENMRS_ATOMFEED_USER` (por defecto `admin` en entorno demo; requiere personalización en producción)
- `OPENELIS_ATOMFEED_USER` (por defecto `atomfeed`)
- `ODOO_ATOMFEED_USER` (por defecto `emrsync`)

> [!WARNING]
> En entornos de producción, estas credenciales de servicio deben sustituirse obligatoriamente mediante el archivo `.env` para evitar el uso de claves por defecto.

---

## 4. Auditoría y Trazabilidad en Acceso
1. **Auditoría de Datos Clínicos:** Toda entidad de OpenMRS registra obligatoriamente:
   - `creator` (ID del usuario creador)
   - `date_created` (fecha y hora exacta de creación)
   - `changed_by` y `date_changed` (usuario y fecha de última modificación)
   - `voided`, `voided_by`, `date_voided` y `void_reason` (anulación lógica sin borrado físico)
2. **Auditoría HTTP y Red:** El contenedor `bahmni/proxy` (Nginx) registra todas las transacciones HTTP/HTTPS en `/var/log/nginx/access.log` con dirección IP, timestamp, verbo HTTP, recurso, código de respuesta y User-Agent.
