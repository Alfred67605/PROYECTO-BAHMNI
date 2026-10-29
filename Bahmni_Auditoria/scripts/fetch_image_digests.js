const https = require('https');
const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/llano/Downloads/PROYEC/Bahmni_Auditoria';

const images = [
  { service: 'proxy', image: 'bahmni/proxy', tag: '1.1.0', profile: 'emr, bahmni-standard' },
  { service: 'bahmni-config', image: 'bahmni/standard-config', tag: '1.0.0', profile: 'emr, bahmni-standard' },
  { service: 'openelis', image: 'bahmni/openelis', tag: '1.0.0', profile: 'openelis, bahmni-standard' },
  { service: 'openelisdb', image: 'bahmni/openelis-db', tag: '1.0.0-standard', profile: 'openelis, bahmni-standard' },
  { service: 'odoo', image: 'bahmni/odoo-16', tag: '1.0.0', profile: 'odoo, bahmni-standard' },
  { service: 'odoodb', image: 'bahmni/odoo-16-db', tag: '1.0.0-standard', profile: 'odoo, bahmni-standard' },
  { service: 'odoo-connect', image: 'bahmni/odoo-connect', tag: '1.0.0', profile: 'odoo, bahmni-standard' },
  { service: 'openmrs', image: 'bahmni/openmrs', tag: '1.1.2', profile: 'emr, bahmni-standard' },
  { service: 'openmrs-patch', image: 'bahmni/openmrs', tag: '1.1.3', profile: 'emr, bahmni-standard (1.0.2-standard patch)' },
  { service: 'openmrsdb', image: 'bahmni/openmrs-db', tag: '1.0.0-standard', profile: 'emr, bahmni-standard' },
  { service: 'bahmni-web', image: 'bahmni/bahmni-web', tag: '1.1.0', profile: 'emr, bahmni-standard' },
  { service: 'bahmni-apps-frontend', image: 'bahmni/bahmni-apps-frontend', tag: 'latest', profile: 'emr, bahmni-standard' },
  { service: 'template-service', image: 'bahmni/bahmni-template-service', tag: '1.0.0', profile: 'emr, bahmni-standard' },
  { service: 'implementer-interface', image: 'bahmni/implementer-interface', tag: '1.1.1', profile: 'implementer-interface, bahmni-standard' },
  { service: 'reports', image: 'bahmni/reports', tag: '1.1.0', profile: 'reports, bahmni-standard' },
  { service: 'reportsdb', image: 'library/mysql', tag: '8.0', profile: 'reports, bahmni-standard' },
  { service: 'patient-documents', image: 'bahmni/patient-documents', tag: '1.1.1', profile: 'emr, bahmni-standard' },
  { service: 'appointments', image: 'bahmni/appointments', tag: '1.1.1', profile: 'emr, bahmni-standard' },
  { service: 'dcm4chee', image: 'bahmni/dcm4chee', tag: '1.0.0', profile: 'pacs, bahmni-standard' },
  { service: 'pacs-integration', image: 'bahmni/pacs-integration', tag: '1.0.0', profile: 'pacs, bahmni-standard' },
  { service: 'pacsdb', image: 'library/postgres', tag: '9.6', profile: 'pacs, bahmni-standard' },
  { service: 'pacs-simulator', image: 'bahmni/pacs-simulator', tag: '1.0.0', profile: 'pacs-simulator' },
  { service: 'atomfeed-console', image: 'bahmni/atomfeed-console', tag: 'latest', profile: 'atomfeed-console' },
  { service: 'sms-service', image: 'bahmni/sms-service', tag: '1.1.0', profile: 'sms' },
  { service: 'ipd', image: 'bahmni/microfrontend-ipd', tag: '1.0.0', profile: 'emr, bahmni-standard' },
  { service: 'cdss', image: 'bahmni/cdss-reference', tag: '1.1.0', profile: 'cdss' },
  { service: 'metabase', image: 'bahmni/bahmni-metabase', tag: '1.4.0', profile: 'metabase, bahmni-mart' },
  { service: 'metabasedb', image: 'library/postgres', tag: '15.1', profile: 'metabase, bahmni-mart' },
  { service: 'mart', image: 'bahmni/bahmni-mart', tag: '1.1.0', profile: 'bahmni-mart' }
];

function fetchDockerHubTag(repo, tag) {
  return new Promise((resolve) => {
    let cleanRepo = repo;
    if (!cleanRepo.includes('/')) cleanRepo = `library/${cleanRepo}`;
    const url = `https://hub.docker.com/v2/repositories/${cleanRepo}/tags/${tag}`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const parsed = JSON.parse(data);
            const digest = parsed.digest || (parsed.images && parsed.images[0] ? parsed.images[0].digest : 'N/A');
            const size = parsed.full_size || (parsed.images && parsed.images[0] ? parsed.images[0].size : 0);
            const lastUpdated = parsed.last_updated || 'N/A';
            resolve({ status: 'FOUND', digest, size, lastUpdated });
          } catch(e) { resolve({ status: 'PARSE_ERROR', digest: 'N/A', size: 0, lastUpdated: 'N/A' }); }
        } else {
          resolve({ status: `HTTP_${res.statusCode}`, digest: 'N/A', size: 0, lastUpdated: 'N/A' });
        }
      });
    }).on('error', err => resolve({ status: `ERROR_${err.message}`, digest: 'N/A', size: 0, lastUpdated: 'N/A' }));
  });
}

async function main() {
  console.log('Consultando Docker Hub API para registrar imágenes y digests...');
  const detailedList = [];

  for (const item of images) {
    process.stdout.write(`Fetching ${item.image}:${item.tag}... `);
    const info = await fetchDockerHubTag(item.image, item.tag);
    console.log(`${info.status} | Digest: ${info.digest.slice(0, 19)}... | Size: ${(info.size / 1024 / 1024).toFixed(1)} MB`);
    detailedList.push({
      ...item,
      dockerHubStatus: info.status,
      digest: info.digest,
      sizeBytes: info.size,
      sizeMB: (info.size / 1024 / 1024).toFixed(2),
      lastUpdated: info.lastUpdated
    });
  }

  const outJson = path.join(baseDir, '08_Inventarios', 'docker_images_manifest.json');
  fs.writeFileSync(outJson, JSON.stringify(detailedList, null, 2), 'utf8');
  console.log(`\nSaved images manifest to: ${outJson}`);

  // Generate CSV for components/images
  let csv = 'Servicio,Imagen,Etiqueta,Perfil Compose,Estado Docker Hub,Digest SHA256,Tamano MB,Ultima Actualizacion\n';
  detailedList.forEach(img => {
    csv += `"${img.service}","${img.image}","${img.tag}","${img.profile}","${img.dockerHubStatus}","${img.digest}","${img.sizeMB}","${img.lastUpdated}"\n`;
  });
  const outCsv = path.join(baseDir, '08_Inventarios', 'LISTA_IMAGENES_CONTENEDORES.csv');
  fs.writeFileSync(outCsv, csv, 'utf8');
  console.log(`Saved CSV list to: ${outCsv}`);
}

main();
