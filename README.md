# PROYECTO-BAHMNI

> **Expediente Técnico y Documental de Auditoría Informática**  
> **Sistema Evaluado:** Sistema de Gestión Hospitalaria y Registro Médico Electrónico (HIMS / EMR) **Bahmni Standard v1.0.2-standard**  
> **Asignatura:** Auditoría Informática  
> **Herramienta de Recopilación y Análisis:** Google Antigravity IDE  

---

## 👥 Equipo Auditor de Trabajo (Roles Académicos)

1. **Alfredo Llanos Taca** — Máster del equipo y auditor líder.
2. **Lucy Zoraida Beltrán Tarqui** — Auditora de seguridad y accesos.
3. **Anny Britney Bohorquez Burgos** — Auditora de procesos e información.
4. **Eloy Moisés Meneses Jancko** — Auditor de infraestructura y continuidad.

---

## 📑 Documentos Clave del Expediente

- 📘 [**LEVANTAMIENTO_BAHMNI_ACTIVIDAD_3.md**](Bahmni_Auditoria/LEVANTAMIENTO_BAHMNI_ACTIVIDAD_3.md): Evaluación documental exhaustiva del ciclo de vida del software, catálogo de evidencias `DOC-001` a `DOC-037`, matrices de control y hallazgos.
- 📙 [**LEVANTAMIENTO_BAHMNI_ACTIVIDADES_1_Y_2.md**](Bahmni_Auditoria/LEVANTAMIENTO_BAHMNI_ACTIVIDADES_1_Y_2.md): Diagnóstico inicial, dimensionamiento y relevamiento de arquitectura y componentes.
- 📋 [**README_INICIO.md**](Bahmni_Auditoria/README_INICIO.md): Guía de navegación rápida y bienvenida al expediente.
- 📊 [**BAHMNI_DATOS_PARA_AUDITORIA.md**](Bahmni_Auditoria/09_Informes/BAHMNI_DATOS_PARA_AUDITORIA.md): Informe técnico de datos consolidados para auditoría TIC.

---

## 🗂️ Estructura del Expediente (`Bahmni_Auditoria/`)

```text
Bahmni_Auditoria/
├── 01_Sistema/                 # Código fuente de despliegue, configuración y módulos centrales
│   ├── bahmni-docker/          # Orquestador Docker Compose (Tags 1.0.0, 1.0.1, 1.0.2-standard)
│   ├── default-config/         # Configuración oficial de Bahmni Standard (Tag 1.0.0)
│   ├── bahmni-odoo-modules/    # Módulos ERP Odoo v16 para facturación e inventario
│   ├── pacs-integration/       # Conectores y sincronización de radiología DCM4CHEE
│   ├── bahmni-core/            # Módulos OpenMRS Java y clientes Atomfeed
│   └── openmrs-module-bahmniapps/ # Frontend clínico EMR
├── 02_Documentacion_Original/  # Documentación original custodiada
│   ├── Confluence_Bahmni_Export_27Sep2023.pdf  # Exportación oficial de la Wiki Confluence (154.7 MB gestionado vía Git LFS)
│   └── wiki_pages/             # Representaciones originales HTML y JSON vía REST API
├── 03_Documentacion_MD/        # 456 páginas técnicas oficiales convertidas a Markdown limpio
├── 04_Pruebas_Funcionales/     # Suites oficiales de pruebas automatizadas
│   ├── bahmni-lite-e2e-tests/  # Pruebas E2E (Playwright / Cypress / Cucumber)
│   └── bahmni-appointments-functional-tests/ # Pruebas del módulo de citas
├── 05_Pruebas_Rendimiento/     # Pruebas de carga, informes y herramientas
│   ├── BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md # Informe consolidado Gatling
│   ├── performance-test/       # Suite de rendimiento Gatling / Scala
│   ├── bahmni-test-data-generator/ # Generador sintético de 100,000 historias
│   └── recursos_informes/      # Informes Gatling interactivos HTML y gráficos PNG
├── 06_Arquitectura_y_Datos/    # Diseño técnico, modelos y decisiones
│   ├── ARQUITECTURA_Y_DOCUMENTACION_TECNICA.md # Guía arquitectónica
│   └── bahmni-decision-records/# Registros de Decisiones de Arquitectura (ADR)
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
│   └── BAHMNI_DATOS_PARA_AUDITORIA.md # Informe principal para auditoría TIC
├── scripts/                    # Scripts de recopilación, verificación e inventariado
├── LEVANTAMIENTO_BAHMNI_ACTIVIDADES_1_Y_2.md # Informe Actividades 1 y 2
├── LEVANTAMIENTO_BAHMNI_ACTIVIDAD_3.md        # Informe Actividad 3
└── README_INICIO.md            # Índice maestro del expediente
```

---

## 🛠️ Tecnologías y Componentes Auditados

- **Microservicios y Contenedores:** Docker Compose con 21 servicios oficiales (OpenMRS, Bahmni Apps, Odoo 16, PostgreSQL, MySQL, Bahmni Mart, Atomfeed, DCM4CHEE, OpenElis).
- **Control de Versiones y LFS:** Git & Git LFS para custodia de binarios pesados.
- **Integridad:** Catálogo criptográfico con manifiestos SHA-256 (`MANIFEST_SHA256.txt`).
