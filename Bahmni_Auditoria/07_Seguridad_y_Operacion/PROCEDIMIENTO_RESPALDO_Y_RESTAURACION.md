# Procedimiento Oficial de Respaldo y Restauración - Bahmni Standard

> **Fuente Oficial:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\bahmni-docker\bahmni-standard\backup_bahmni_standard.sh`  
> **Script de Restauración:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\bahmni-docker\bahmni-standard\restore_bahmni_standard.sh`  
> **Utilidades:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\01_Sistema\bahmni-docker\backup_restore\backup_utils.sh`  
> **Fecha de verificación empírica:** 2026-10-20  
> **Clasificación:** [Hecho documentado]

---

## 1. Resumen Ejecutivo del Procedimiento
El sistema hospitalario Bahmni Standard almacena datos tanto en bases de datos relacionales (MySQL y PostgreSQL) como en el sistema de archivos de contenedores y volúmenes Docker (imágenes diagnósticas DICOM, adjuntos clínicos, reportes generados y filestores de Odoo).

El procedimiento oficial provisto en la distribución `bahmni-docker` contempla dos scripts modulares para garantizar copias consistentes y restauración reproducible:
1. `backup_bahmni_standard.sh`
2. `restore_bahmni_standard.sh`

---

## 2. Bases de Datos Respaldadas
| Base de Datos | Motor / Servidor | Contenedor | Archivo de Volcado Generado | Descripción |
|---|---|---|---|---|
| OpenMRS DB | MySQL 8.0 | `openmrsdb` | `openmrsdb_backup.sql` | Historia clínica electrónica, pacientes, encuentros, órdenes y conceptos |
| Reports DB | MySQL 8.0 | `reportsdb` | `reportsdb_backup.sql` | Esquema de agregación y reportes hospitalarios |
| OpenELIS DB (`clinlims`) | PostgreSQL 9.6 | `openelisdb` | `openelisdb_backup.sql` | Sistema de Información de Laboratorio (LIS), muestras, paneles y resultados |
| Odoo DB (`odoo`) | PostgreSQL 16.1 | `odoodb` | `odoodb_backup.sql` | Facturación médica, cotizaciones, inventario y farmacia hospitalaria |
| Odoo 10 DB (si aplica) | PostgreSQL 9.6 | `odoo-10-db` | `odoo_10_db_backup.sql` | Base de datos de compatibilidad para migraciones históricas |
| DCM4CHEE DB (`pacs_db`)| PostgreSQL 9.6 | `pacsdb` | `dcm4cheedb_backup.sql` | Catálogo de metadatos PACS y series DICOM |
| PACS Integration DB | PostgreSQL 9.6 | `pacsdb` | `pacs_integrationdb_backup.sql` | Base de sincronización Atomfeed para pedidos de radiología |

---

## 3. Volúmenes y Activos de Archivos Respaldados
| Activo / Directorio | Contenedor Origen | Destino en Carpeta Backup | Tipo de Información |
|---|---|---|---|
| `/home/bahmni/document_images` | `openmrs` | `document_images/` | Documentos y exámenes escaneados de pacientes |
| `/home/bahmni/uploaded_results` | `openmrs` | `uploaded_results/` | Archivos de resultados de laboratorio cargados |
| `/home/bahmni/uploaded-files` | `openmrs` | `uploaded-files/` | Archivos generales adjuntos a la historia |
| `/home/bahmni/patient_images` | `openmrs` | `patient_images/` | Fotografías de filiación e identificación de pacientes |
| `/home/bahmni/clinical_forms` | `openmrs` | `clinical_forms/` | Definiciones y plantillas de formularios clínicos |
| `/openmrs/data/configuration_checksums` | `openmrs` | `configuration_checksums/` | Checksums de configuración y control de versiones de metadatos |
| `/home/bahmni/reports` | `reports` | `reports/` | Reportes encolados y exportaciones históricas |
| `/var/lib/odoo/filestore` | `odoo` | `filestore/` | Almacén de archivos binarios, adjuntos y facturas de Odoo |
| `/var/lib/bahmni/dcm4chee/server/default/archive/` | `dcm4chee` | `dcm4chee_archive/` | Archivos binarios de imágenes diagnósticas DICOM |

---

## 4. Ejecución del Proceso de Respaldo
```bash
# Acceder a la carpeta de la distribución Standard
cd /path/to/bahmni-docker/bahmni-standard

# Ejecutar el script oficial de respaldo
./backup_bahmni_standard.sh
```
El script crea automáticamente una subcarpeta con marca de tiempo:
`./backup-artifacts/YYYY-MM-DD_HH-mm-ss/` conteniendo todos los archivos `.sql` y directorios comprimidos.

---

## 5. Ejecución del Proceso de Restauración
```bash
# Sintaxis oficial
./restore_bahmni_standard.sh <ruta-a-la-carpeta-de-backup>

# Ejemplo:
./restore_bahmni_standard.sh ./backup-artifacts/2026-10-20_14-30-00
```
El proceso realiza:
1. Validación de existencia del directorio y presencia de volcados.
2. Restauración secuencial de cada motor SQL (`mysql` con credenciales root, `postgres` con usuario y contraseña del servicio).
3. Lanzamiento del contenedor efímero `restore_volumes` (imagen `bash:5.2.15`) que monta todos los volúmenes destino y sincroniza los directorios de archivos.
4. Eliminación limpia del contenedor de restauración `restore_volumes`.
