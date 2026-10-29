# Registros de Auditoría y Trazabilidad - Bahmni Standard

> **Fuente Oficial:** 
> - OpenMRS Data Model Core (`c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\bahmni-core`)
> - Atomfeed Architecture (`c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\03_Documentacion_MD\3506200_atom-feed-based-synchronization-in-bahmni.md`)
> - Nginx Proxy Configuration (`c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\bahmni-docker\bahmni-standard\docker-compose.yml`)
> **Clasificación:** [Hecho documentado] e [Inferencia técnica]

---

## 1. Principio Fundamental: Inmutabilidad y Borrado Lógico (Soft-Delete)
En el expediente clínico Bahmni Standard, **ningún registro clínico es eliminado físicamente** de la base de datos relacional durante la operación cotidiana.

### 1.1 Columnas Obligatorias de Trazabilidad en OpenMRS
Toda tabla clínica (incluyendo `patient`, `person`, `encounter`, `obs`, `orders`, `concept`, `drug_order`) contiene los siguientes campos estándar de auditoría:
- `creator` (INT, Clave foránea hacia `users.user_id`): Identifica qué usuario dio de alta el registro.
- `date_created` (DATETIME): Momento exacto de inserción.
- `changed_by` (INT, Clave foránea hacia `users.user_id`): Último usuario que modificó el registro.
- `date_changed` (DATETIME): Fecha y hora de la última modificación.
- `voided` (BOOLEAN): Bandera de anulación lógica (`0` = activo, `1` = anulado).
- `voided_by` (INT): Usuario que autorizó o ejecutó la anulación.
- `date_voided` (DATETIME): Fecha y hora de la anulación.
- `void_reason` (VARCHAR): Justificación textual obligatoria del motivo de anulación.

---

## 2. Trazabilidad de Sincronización Inter-Sistemas (Atomfeed)
Bahmni Standard utiliza el protocolo Atomfeed para mantener la consistencia entre EMR (OpenMRS), LIS (OpenELIS), ERP (Odoo) y PACS.
- Cada transacción (creación de paciente, solicitud de examen de laboratorio, validación de resultado, emisión de orden de cobro) se publica en un feed inmutable paginado.
- Cada subsistema almacena un marcador local (`event_records_offset` / `failed_events`) que indica el último evento procesado con éxito.
- Los fallos de integración quedan registrados en la tabla de eventos fallidos, permitiendo auditoría retrospectiva de fallas de sincronización mediante la interfaz web `atomfeed-console`.

---

## 3. Registros de Acceso y Navegación (HTTP Proxy)
El contenedor `proxy` registra de forma estructurada en `/var/log/nginx/access.log`:
- Dirección IP de origen del cliente o estación de trabajo.
- Timestamp con zona horaria ISO.
- Método HTTP y URI solicitada (incluyendo endpoints REST y llamadas FHIR).
- Código de estado HTTP de respuesta (200, 301, 400, 401, 403, 500, 502).
- Bytes transferidos y tiempo de respuesta del servidor en milisegundos.
- Cadena de `User-Agent` del navegador.

---

## 4. Trazabilidad Financiera y de Farmacia en Odoo
- En Odoo ERP, cada cotización médica, factura, ajuste de stock de fármacos y movimiento contable genera una entrada en el "Chatter" de auditoría de Odoo (`mail_message` y `mail_tracking_value`), registrando:
  - Quién validó el cobro.
  - De qué lote de medicamentos se extrajeron las unidades prescritas.
  - La fecha, hora y comprobante contable emitido.
