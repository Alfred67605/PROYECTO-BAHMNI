# Expediente Documental y Técnico: Sistema Hospitalario Bahmni Standard

> **Objetivo:** Recopilación, extracción, organización y verificación de evidencias para Auditoría TIC.  
> **Fecha de Recopilación:** Octubre de 2026  
> **Herramienta de Recopilación:** Google Antigravity IDE  
> **Ubicación del Expediente:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria`  
> **Archivo Principal de Auditoría:** [`09_Informes/BAHMNI_DATOS_PARA_AUDITORIA.md`](09_Informes/BAHMNI_DATOS_PARA_AUDITORIA.md)

---

## 1. Estructura General del Expediente

El expediente se encuentra organizado en 9 directorios especializados para facilitar la labor de auditoría y revisión técnica:

```
Bahmni_Auditoria/
├── 01_Sistema/                 # Código fuente de despliegue, configuración y módulos centrales
│   ├── bahmni-docker/          # Orquestador Docker Compose (Tags 1.0.0, 1.0.1, 1.0.2-standard)
│   ├── default-config/         # Configuración oficial de Bahmni Standard (Tag 1.0.0)
│   ├── bahmni-odoo-modules/    # Módulos ERP Odoo v16 para facturación e inventario
│   ├── pacs-integration/       # Conectores y sincronización de radiología DCM4CHEE
│   ├── bahmni-core/            # Módulos OpenMRS Java y clientes Atomfeed
│   └── openmrs-module-bahmniapps/ # Frontend clínico EMR
├── 02_Documentacion_Original/  # Documentos originales sin modificaciones
│   ├── Confluence_Bahmni_Export_27Sep2023.pdf  # Exportación oficial de la Wiki (154.7 MB)
│   └── wiki_pages/             # Representaciones originales HTML y JSON vía REST API
├── 03_Documentacion_MD/        # Más de 300 páginas de la Wiki convertidas a Markdown limpio
├── 04_Pruebas_Funcionales/     # Suites oficiales de pruebas automatizadas
│   ├── bahmni-lite-e2e-tests/  # Pruebas E2E (Playwright / Cypress / Cucumber)
│   └── bahmni-appointments-functional-tests/ # Pruebas del módulo de citas
├── 05_Pruebas_Rendimiento/     # Pruebas de carga, informes y herramientas
│   ├── BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md # Informe consolidado
│   ├── performance-test/       # Suite de rendimiento Gatling / Scala
│   ├── bahmni-test-data-generator/ # Generador sintético de 100,000 historias
│   └── recursos_informes/      # Informes Gatling interactivos HTML y gráficos PNG locales
├── 06_Arquitectura_y_Datos/    # Diseño técnico, modelos y decisiones
│   ├── ARQUITECTURA_Y_DOCUMENTACION_TECNICA.md # Guía arquitectónica
│   └── bahmni-decision-records/# Registros de Decisiones Arquitectónicas (ADR)
├── 07_Seguridad_y_Operacion/   # Políticas operativas y de seguridad
│   ├── PROCEDIMIENTO_RESPALDO_Y_RESTAURACION.md # Procedimiento oficial de backup/restore
│   ├── POLITICAS_SEGURIDAD_ROLES_PERMISOS.md    # Matriz RBAC y control de accesos
│   ├── CONFIGURACION_SEGURA_Y_MANTENIMIENTO.md # Hardening y ciclo de vida
│   └── REGISTROS_AUDITORIA_Y_TRAZABILIDAD.md    # Trazabilidad y soft-deletes
├── 08_Inventarios/             # Evidencias estructuradas y trazabilidad
│   ├── INVENTARIO_DOCUMENTAL.csv      # Listado de todos los documentos y metadatos
│   ├── INVENTARIO_COMPONENTES.csv     # Repositorios, ramas, commits y versiones
│   ├── LISTA_IMAGENES_CONTENEDORES.csv# 29 imágenes Docker con sus digests SHA-256
│   ├── MATRIZ_DOCUMENTACION.md        # Matriz de cobertura por áreas
│   ├── FALTANTES_Y_LIMITACIONES.md    # Registro de excepciones y pendientes
│   ├── MANIFEST_SHA256.txt            # Hashes criptográficos de integridad
│   └── RESUMEN_DESCARGA.md            # Estadísticas de volúmenes y archivos
├── 09_Informes/
│   └── BAHMNI_DATOS_PARA_AUDITORIA.md # INFORME PRINCIPAL PARA AUDITORÍA TIC
├── scripts/                    # Scripts Node.js utilizados para la recopilación verificada
└── README_INICIO.md            # Este archivo de bienvenida y guía
```

---

## 2. Guía de Consulta Rápida para el Auditor

### 2.1 Para Evaluar el Sistema y su Arquitectura
- Abra [`09_Informes/BAHMNI_DATOS_PARA_AUDITORIA.md`](09_Informes/BAHMNI_DATOS_PARA_AUDITORIA.md) para consultar la síntesis exhaustiva con referencias y clasificación epistemológica (`[Hecho documentado]`, `[Inferencia técnica]`, `[No encontrado]`, `[Pendiente de verificación local]`).
- Revise [`06_Arquitectura_y_Datos/ARQUITECTURA_Y_DOCUMENTACION_TECNICA.md`](06_Arquitectura_y_Datos/ARQUITECTURA_Y_DOCUMENTACION_TECNICA.md) y el diagrama de alta resolución en `01_Sistema/bahmni-docker/architecture-diagram/bahmni-standard-architecture-diagram.png`.

### 2.2 Para Consultar los Manuales Oficiales
- **Manual en PDF Consolidado:** Abra `02_Documentacion_Original/Confluence_Bahmni_Export_27Sep2023.pdf` (154.7 MB, exportación oficial del espacio BAH de Confluence).
- **Manuales en Markdown:** Explore `03_Documentacion_MD/32014338_user-guide.md` y `03_Documentacion_MD/2392073_implementers-guide.md`.

### 2.3 Para Auditar las Pruebas de Rendimiento
- Consulte [`05_Pruebas_Rendimiento/BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md`](05_Pruebas_Rendimiento/BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md).
- Para ver los informes interactivos de Gatling offline, abra con su navegador los archivos ubicados en `05_Pruebas_Rendimiento/recursos_informes/*.html`.

### 2.4 Para Auditar Seguridad, Respaldos y Roles
- Revise los documentos en `07_Seguridad_y_Operacion/`.
- Verifique las variables del orquestador en `01_Sistema/bahmni-docker/bahmni-standard/.env`.

### 2.5 Para Comprobar la Integridad Criptográfica (SHA-256)
- Ejecute en PowerShell dentro de `Bahmni_Auditoria`:
  ```powershell
  Get-FileHash -Algorithm SHA256 "02_Documentacion_Original/Confluence_Bahmni_Export_27Sep2023.pdf"
  ```
- Compare contra las entradas certificadas en [`08_Inventarios/MANIFEST_SHA256.txt`](08_Inventarios/MANIFEST_SHA256.txt).
