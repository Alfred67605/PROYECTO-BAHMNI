# Matriz de Documentación - Bahmni Standard

> **Ubicación del Expediente:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria`  
> **Fecha de Verificación:** 2026-10-20  
> **Criterio de Evaluación:** Evidencia empírica directa (archivos descargados, repositorios clonados, APIs consultadas).

---

## 1. Tabla Matricial por Áreas de Auditoría TIC

| ID | Área / Dimensión | Requisito / Elemento Documental | Estado | Evidencia Local (Ruta / Hash) | Observaciones Técnicas |
|---|---|---|---|---|---|
| **A-01** | Descripción y Alcance | Objetivos del sistema hospitalario, alcance funcional y módulos | **Disponible** | `03_Documentacion_MD/32014338_user-guide.md`<br>`02_Documentacion_Original/Confluence_Bahmni_Export_27Sep2023.pdf` | Documentado en la Wiki y en el PDF exportado de 154.7 MB. |
| **A-02** | Descripción y Alcance | Actores, roles y flujos de trabajo clínico y administrativo | **Disponible** | `07_Seguridad_y_Operacion/POLITICAS_SEGURIDAD_ROLES_PERMISOS.md`<br>`03_Documentacion_MD/32014350_clinical.md` | Flujos de Admisión, Consulta Externa (OPD), Hospitalización (IPD), Laboratorio (OpenELIS) y Facturación (Odoo). |
| **B-01** | Requisitos | Requisitos de hardware y software (servidor y clientes) | **Disponible** | `01_Sistema/bahmni-docker/bahmni-standard/.env`<br>`05_Pruebas_Rendimiento/BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md` | Especificación de CPU (4 vCPU), RAM (16 GB), Almacenamiento (100 GB) y SO (Ubuntu 22.04 LTS / Docker Compose). |
| **B-02** | Requisitos | Criterios de aceptación y especificaciones formales IEEE/SRS | **Parcial** | `04_Pruebas_Funcionales/bahmni-lite-e2e-tests/specs/`<br>`06_Arquitectura_y_Datos/bahmni-decision-records/` | Los criterios de aceptación están codificados en escenarios Gherkin/Cucumber (`.feature` y specs) y ADRs, no en un PDF único formal SRS. |
| **C-01** | Diseño | Arquitectura global del sistema y diagramas de bloques | **Disponible** | `01_Sistema/bahmni-docker/architecture-diagram/bahmni-standard-architecture-diagram.png`<br>`06_Arquitectura_y_Datos/ARQUITECTURA_Y_DOCUMENTACION_TECNICA.md` | Diagrama PNG oficial en alta resolución y documentación de componentes. |
| **C-02** | Diseño | Integraciones inter-módulos (Atomfeed, PACS, LIS, ERP) | **Disponible** | `03_Documentacion_MD/3506200_atom-feed-based-synchronization-in-bahmni.md`<br>`01_Sistema/pacs-integration/` | Especificación exhaustiva del mecanismo de feeds desacoplados Atomfeed. |
| **C-03** | Diseño | Modelos de datos, esquemas de BD y diccionarios | **Disponible** | `01_Sistema/bahmni-core/`<br>`01_Sistema/bahmni-odoo-modules/`<br>`03_Documentacion_MD/6094854_generating-database-diagrams-for-schema-analysis.md` | Esquemas relacionales MySQL (OpenMRS) y PostgreSQL (OpenELIS, Odoo, PACS). Diccionario CIEL integrado. |
| **C-04** | Diseño | Especificación de APIs (REST y FHIR) | **Disponible** | `03_Documentacion_MD/6488066_bahmni-rest-api-fhir-apis.md` | Endpoints REST de OpenMRS y perfiles de recursos FHIR v2. |
| **D-01** | Desarrollo | Estructura de código y dependencias | **Disponible** | `01_Sistema/bahmni-core/pom.xml`<br>`01_Sistema/openmrs-module-bahmniapps/package.json` | Módulos Maven Java en backend y npm/bower en frontend. |
| **D-02** | Desarrollo | Decisiones técnicas de arquitectura (ADR) | **Disponible** | `06_Arquitectura_y_Datos/bahmni-decision-records/` | Registro cronológico oficial de Architectural Decision Records. |
| **D-03** | Desarrollo | Historial de versiones y commits de release | **Disponible** | `01_Sistema/bahmni-docker` (git log tags 1.0.0, 1.0.1, 1.0.2-standard) | Trazabilidad completa de commits y changelogs. |
| **E-01** | Instalación | Despliegue con Docker Compose y variables de entorno | **Disponible** | `01_Sistema/bahmni-docker/bahmni-standard/docker-compose.yml`<br>`01_Sistema/bahmni-docker/bahmni-standard/.env` | Orquestador reproducible con perfiles compose configurados. |
| **E-02** | Instalación | Guía rápida y paso a paso | **Disponible** | `03_Documentacion_MD/3117744129_getting-started-quickly-with-bahmni-on-docker.md`<br>`03_Documentacion_MD/299630726_running-bahmni-on-docker.md` | Instrucciones verificadas de instalación e inicialización. |
| **E-03** | Instalación | Instalación RPM antigua (CentOS) | **Archivada / No recomendada** | `https://www.bahmni.org/install` (Sección RPMs descontinuada) | El sitio oficial advierte explícitamente que los RPMs están deprecados; Docker es el estándar vigente. |
| **F-01** | Manuales | Manual de usuario clínico y de enfermería | **Disponible** | `03_Documentacion_MD/32014338_user-guide.md`<br>`02_Documentacion_Original/Confluence_Bahmni_Export_27Sep2023.pdf` | Manual integral con capturas y flujos de consulta externa e internación. |
| **F-02** | Manuales | Guía del Implementador (Form Builder, Configuración) | **Disponible** | `03_Documentacion_MD/2392073_implementers-guide.md` y 50+ subpáginas | Configuración de conceptos, formularios y tableros. |
| **G-01** | Seguridad y Operación | Políticas de respaldo (Backup) y restauración (Restore) | **Disponible** | `07_Seguridad_y_Operacion/PROCEDIMIENTO_RESPALDO_Y_RESTAURACION.md`<br>`01_Sistema/bahmni-docker/bahmni-standard/backup_bahmni_standard.sh` | Scripts bash automatizados para 7 bases de datos y 9 volúmenes. |
| **G-02** | Seguridad y Operación | Roles, permisos, autenticación y credenciales | **Disponible** | `07_Seguridad_y_Operacion/POLITICAS_SEGURIDAD_ROLES_PERMISOS.md` | Matriz de roles RBAC y usuarios de servicio Atomfeed. |
| **G-03** | Seguridad y Operación | Trazabilidad y registros de auditoría | **Disponible** | `07_Seguridad_y_Operacion/REGISTROS_AUDITORIA_Y_TRAZABILIDAD.md` | Soft-deletes en OpenMRS, log de transacciones y proxy access log. |
| **H-01** | Calidad y Pruebas | Pruebas funcionales E2E y de citas | **Disponible** | `04_Pruebas_Funcionales/bahmni-lite-e2e-tests/`<br>`04_Pruebas_Funcionales/bahmni-appointments-functional-tests/` | Código fuente completo de casos de prueba automatizados. |
| **H-02** | Calidad y Pruebas | Pruebas de rendimiento de Bahmni Standard | **Disponible** | `05_Pruebas_Rendimiento/BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md`<br>`05_Pruebas_Rendimiento/recursos_informes/` | Reportes de 70, 120 y 200 usuarios concurrentes en Standard 1.0.0 Beta. |
| **H-03** | Calidad y Pruebas | Generador sintético de datos de prueba | **Disponible** | `05_Pruebas_Rendimiento/bahmni-test-data-generator/` | Herramienta para poblar 100,000 historias clínicas y 400,000 observaciones. |
| **H-04** | Calidad y Pruebas | Certificaciones formales ISO 27001 / ISO 13485 de Bahmni | **No existente / No afirmable** | Búsqueda exhaustiva en repositorios y Wiki | El proyecto Bahmni es software libre de código abierto; no cuenta con certificación ISO emitida per se (la certificación recae sobre la entidad que lo implementa). |

---

## 2. Resumen Estadístico de Cobertura
- **Documentación Disponible:** 19/21 áreas evaluadas (90.5%).
- **Documentación Parcial:** 1/21 (Criterios de aceptación estructurados en código de pruebas en lugar de SRS tradicional).
- **Documentación Archivada:** 1/21 (Guías RPM CentOS obsoletas reemplazadas por Docker).
- **Inexistente / No certificable:** Certificación ISO de fábrica (corresponde a proceso de auditoría local de la institución de salud).
