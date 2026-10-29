# Registro de Faltantes, Limitaciones y Acciones Pendientes - Bahmni Standard

> **Ubicación:** `c:\Users\llano\Downloads\PROYEC\Bahmni_Auditoria\08_Inventarios\FALTANTES_Y_LIMITACIONES.md`  
> **Fecha de Evaluación:** 2026-10-20  
> **Clasificación de Hallazgos:** Evidencia empírica verificada.

---

## 1. Limitaciones del Entorno de Ejecución Local

### 1.1 Docker no disponible en PATH del Host
- **Hallazgo:** El binario `docker` o servicio Docker Desktop no está instalado o no se encuentra expuesto en la variable de entorno `PATH` del sistema Windows donde se ejecuta la recopilación.
- **Impacto:** No fue posible ejecutar `docker compose pull` para almacenar físicamente los layers binarios en el demonio local.
- **Acción Mitigante Aplicada:** Se consultó la API oficial de **Docker Hub Registry** (`https://hub.docker.com/v2/repositories/`) para obtener el manifiesto de todas las 29 imágenes del perfil `bahmni-standard`, registrando sus tags, tamaños en MB y **Digests criptográficos inmutables SHA-256** en `08_Inventarios/LISTA_IMAGENES_CONTENEDORES.csv` y `docker_images_manifest.json`.
- **Acción Pendiente para Siguiente Etapa:** Instalar Docker Engine / Docker Desktop en el servidor de pruebas y ejecutar:
  ```bash
  cd 01_Sistema/bahmni-docker/bahmni-standard
  docker compose --env-file .env pull
  ```

---

## 2. Inconsistencias y Observaciones en Repositorios Oficiales

### 2.1 Repositorio `Bahmni/standard-config` sin commits
- **Hallazgo:** Al intentar clonar `https://github.com/Bahmni/standard-config.git`, el repositorio se encontraba vacío (`No commits yet`, `fatal: your current branch appears to be broken`).
- **Análisis Técnico:** El proyecto Bahmni empaqueta la configuración oficial de la distribución Standard en el repositorio principal `https://github.com/Bahmni/default-config.git`, el cual cuenta con la etiqueta de release `1.0.0` (commit `6b2ab4f6b61c40f125cc3f5f71c170803a05e872`).
- **Acción Mitigante Aplicada:** Se clonó exitosamente `default-config` en la versión `1.0.0` dentro de `01_Sistema/default-config`.

### 2.2 Imagen `bahmni/pacs-simulator:1.0.0` no encontrada en Docker Hub (HTTP 404)
- **Hallazgo:** La consulta a `https://hub.docker.com/v2/repositories/bahmni/pacs-simulator/tags/1.0.0` retornó código `HTTP 404`.
- **Análisis Técnico:** El servicio `pacs-simulator` es un contenedor opcional de simulación para pruebas de radiología sin un escáner DICOM real (`profiles: ["pacs-simulator"]`). No afecta la operación hospitalaria real con servidores PACS reales (DCM4CHEE).

---

## 3. Delimitación Temporal y Versiones de Pruebas

### 3.1 Pruebas de Rendimiento asociadas estrictamente a Standard 1.0.0 Beta
- **Hallazgo:** Los informes oficiales publicados de rendimiento (`05_Pruebas_Rendimiento/BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md`) fueron ejecutados por el equipo de ingeniería de ThoughtWorks / Bahmni Coalition en julio de 2024 contra la edición **Bahmni Standard 1.0.0 Beta** en infraestructura AWS EC2.
- **Advertencia para Auditoría:** Estos resultados no deben atribuirse ciegamente a la versión de producción `1.0.2-standard` (julio de 2026), ya que esta última incluye parches de seguridad y correcciones posteriores.

### 3.2 Ausencia de Ejecución Local en esta Etapa
- **Hallazgo:** Conforme al alcance contractual y técnico estipulado, en esta etapa no se han levantado los contenedores ni ejecutado pruebas funcionales locales.
- **Principio de Veracidad:** Los scripts y casos de prueba descargados en `04_Pruebas_Funcionales/` y `05_Pruebas_Rendimiento/` representan **código de prueba oficial del proyecto** y no ejecuciones realizadas en la máquina auditora.

---

## 4. Archivos Históricos de Google Drive No Descargados por Obsolescencia
- En la carpeta pública oficial de Google Drive (`https://drive.google.com/drive/folders/1-ydzl5k1sb6OwJi7_ivjMFAmNAut_FqT`) se identificaron tres archivos de exportación:
  1. `Confluence Bahmni Export 27Sep2023.pdf` (154.7 MB): **Descargado y verificado íntegramente** en `02_Documentacion_Original/`.
  2. `Bahmni_Confluence_Space_Export__24Sep2021.html.zip` (515 MB): Exportación en HTML de 2021. No descargado debido a que su contenido fue superado por el PDF de septiembre de 2023 y la extracción en vivo de la Wiki 2024-2026.
  3. `Wiki_Export_9_Jan_2017.zip` (288 MB): Exportación histórica obsoleta de 2017 correspondiente a versiones CentOS/RPM en desuso.
