const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/llano/Downloads/PROYEC/Bahmni_Auditoria/05_Pruebas_Rendimiento/recursos_informes';
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const resources = [
  // Images from Confluence
  {
    name: 'grafico_cpu_test1_70users_4h.png',
    url: 'https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240726-061927.png?version=1&modificationDate=1721974774165&cacheVersion=1&api=v2'
  },
  {
    name: 'grafico_cpu_test2_70users_8h.png',
    url: 'https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240726-161325.png?version=1&modificationDate=1722010413057&cacheVersion=1&api=v2'
  },
  {
    name: 'grafico_cpu_test3_120users_8h.png',
    url: 'https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240727-024740.png?version=1&modificationDate=1722048469604&cacheVersion=1&api=v2'
  },
  {
    name: 'grafico_cpu_test4_120users_24h.png',
    url: 'https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240729-011957.png?version=1&modificationDate=1722216009368&cacheVersion=1&api=v2'
  },
  // Published Gatling HTML reports
  {
    name: 'gatling_report_70users_5h_index.html',
    url: 'https://bahmni.github.io/performance-test/bahmnistandard-70users-5hours-20240726/index.html'
  },
  {
    name: 'gatling_report_70users_8h_index.html',
    url: 'https://bahmni.github.io/performance-test/bahmnistandard-70users-8hours-20240726/index.html'
  },
  {
    name: 'gatling_report_120users_8h_index.html',
    url: 'https://bahmni.github.io/performance-test/bahmnistandard-120users-8hours-20240727/index.html'
  },
  {
    name: 'gatling_report_120users_24h_index.html',
    url: 'https://bahmni.github.io/performance-test/bahmnistandard-120users-24hours-20240727/index.html'
  },
  {
    name: 'gatling_report_200users_8h_index.html',
    url: 'https://bahmni.github.io/performance-test/bahmnistandard-200users-8hours-20240728/index.html'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const dest = path.join(targetDir, item.name);
    console.log(`Downloading ${item.name} from ${item.url.slice(0, 70)}...`);

    function doReq(url) {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let next = res.headers.location;
          if (next.startsWith('/')) next = 'https://' + new URL(url).hostname + next;
          doReq(next);
          return;
        }
        if (res.statusCode !== 200) {
          console.log(`  Failed ${item.name}: HTTP ${res.statusCode}`);
          resolve({ name: item.name, status: `HTTP_${res.statusCode}` });
          return;
        }
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => {
          const sz = fs.statSync(dest).size;
          console.log(`  Saved ${item.name} (${sz} bytes)`);
          resolve({ name: item.name, status: 'OK', size: sz });
        });
      }).on('error', err => {
        console.error(`  Error ${item.name}:`, err.message);
        resolve({ name: item.name, status: 'ERROR', error: err.message });
      });
    }

    doReq(item.url);
  });
}

async function main() {
  const summary = [];
  for (const item of resources) {
    const r = await download(item);
    summary.push(r);
  }
  fs.writeFileSync(path.join(targetDir, 'descarga_recursos_rendimiento.json'), JSON.stringify(summary, null, 2), 'utf8');
  console.log('Finished downloading performance testing resources.');
}

main();
