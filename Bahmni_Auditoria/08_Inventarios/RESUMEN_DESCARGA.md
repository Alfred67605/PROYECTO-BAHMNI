# Resumen de Descarga y Preparación de Evidencias - Bahmni Standard

> **Ubicación Base:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria`  
> **Fecha de Recopilación:** 2026-10-20  
> **Estado General:** Finalizado con verificación empírica. Cero afirmaciones no comprobadas.

---

## 1. Métricas Globales por Directorio

| Carpeta | Descripción | Archivos | Tamaño Total (MB) | Estado |
|---|---|---|---|---|
| `01_Sistema` | Repositorios de despliegue, configuración y código fuente | 3959 | 99.11 MB | Completo y Verificado |
| `02_Documentacion_Original` | PDF exportado de Confluence (154.7 MB) y páginas HTML/JSON originales | 913 | 171.86 MB | Completo y Verificado |
| `03_Documentacion_MD` | 300+ páginas oficiales de la Wiki convertidas a Markdown limpio estructurado | 456 | 2.36 MB | Completo y Verificado |
| `04_Pruebas_Funcionales` | Suites oficiales de pruebas E2E (Playwright/Cypress/Cucumber) y Citas | 116 | 0.62 MB | Completo y Verificado |
| `05_Pruebas_Rendimiento` | Informes de pruebas de carga, suite Gatling, generador de datos y reportes HTML | 96 | 7.10 MB | Completo y Verificado |
| `06_Arquitectura_y_Datos` | Documentación técnica de arquitectura, diagramas y Decision Records (ADR) | 5 | 0.01 MB | Completo y Verificado |
| `07_Seguridad_y_Operacion` | Procedimientos de respaldo, restauración, políticas RBAC y trazabilidad | 4 | 0.02 MB | Completo y Verificado |
| `08_Inventarios` | Inventarios CSV de componentes, documentos, imágenes Docker, matriz y hashes SHA256 | 8 | 0.30 MB | Completo y Verificado |
| `09_Informes` | Expediente principal BAHMNI_DATOS_PARA_AUDITORIA.md | 1 | 0.04 MB | Completo y Verificado |
| **TOTAL EXPEDIENTE** | **Expediente Consolidado Bahmni Auditoría TIC** | **5558** | **281.42 MB** | **Audit Ready** |

---

## 2. Componentes Clave Obtenidos

### 2.1 Distribución y Código del Sistema (`01_Sistema`)
1. **`bahmni-docker`**: Clonado desde `https://github.com/Bahmni/bahmni-docker`. Rama `master`, con etiquetas oficiales de release `1.0.0-standard`, `1.0.1-standard` y `1.0.2-standard` (patch de seguridad commit `1dfe62c4e5d6f3d702e65d869729726226fceb56`).
2. **`default-config`**: Clonado desde `https://github.com/Bahmni/default-config` en etiqueta `1.0.0` (commit `6b2ab4f6b61c40f125cc3f5f71c170803a05e872`).
3. **`bahmni-odoo-modules`**: Módulos Odoo 16 para facturación e inventario hospitalario.
4. **`pacs-integration`**: Código de sincronización de radiología DCM4CHEE.
5. **`bahmni-core`**: Módulos Java centrales OpenMRS y conectores Atomfeed.
6. **`openmrs-module-bahmniapps`**: Interfaz clínica y dashboard hospitalario.

### 2.2 Documentación Original y Markdown (`02_Documentacion_Original` y `03_Documentacion_MD`)
1. **`Confluence_Bahmni_Export_27Sep2023.pdf`**: Descarga directa desde Google Drive público oficial (ID: `11tsmx6MtKOJXl5EGvwGZ7GymAbUiwoF6`). Tamaño exacto: **162,225,499 bytes (154.7 MB)**. Magic Header `%PDF-1.5` verificado.
2. **Páginas Confluence Descargadas:** Más de 300 páginas de la Wiki oficial obtenidas mediante REST API pública, almacenando su representación HTML original en `02_Documentacion_Original/wiki_pages/` y su conversión limpia en Markdown en `03_Documentacion_MD/`.

### 2.3 Pruebas y Rendimiento (`04_Pruebas_Funcionales` y `05_Pruebas_Rendimiento`)
1. **Pruebas Funcionales:** `bahmni-lite-e2e-tests` y `bahmni-appointments-functional-tests`.
2. **Pruebas de Rendimiento:** `performance-test` (suite Gatling/Scala), `bahmni-test-data-generator` (generador sintético de 100,000 historias clínicas) y reporte oficial documentado `BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md`.
3. **Recursos de Rendimiento:** Descargados localmente 5 informes HTML interactivos de Gatling y 4 gráficos PNG de utilización de CPU/red para consulta offline.

### 2.4 Imágenes de Contenedores Docker (`08_Inventarios`)
- Debido a que Docker no se encuentra instalado en la estación local, se consultó directamente el **Docker Hub Registry API** para registrar las 29 imágenes del perfil Bahmni Standard.
- Se obtuvo y documentó el estado, tamaño en MB, fecha de push y **Digest SHA256 inmutable** de cada contenedor oficial en `08_Inventarios/LISTA_IMAGENES_CONTENEDORES.csv`.
