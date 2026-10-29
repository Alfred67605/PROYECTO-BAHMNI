const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/llano/Downloads/PROYEC/Bahmni_Auditoria';

const repos = [
  // 01_Sistema
  {
    name: 'default-config',
    url: 'https://github.com/Bahmni/default-config.git',
    branch: '1.0.0',
    target: path.join(baseDir, '01_Sistema', 'default-config'),
    desc: 'Configuración oficial por defecto / distribución Standard de Bahmni'
  },
  {
    name: 'bahmni-odoo-modules',
    url: 'https://github.com/Bahmni/bahmni-odoo-modules.git',
    branch: 'master',
    target: path.join(baseDir, '01_Sistema', 'bahmni-odoo-modules'),
    desc: 'Módulos Odoo v16 ERP para facturación, inventario y farmacia de Bahmni Standard'
  },
  {
    name: 'pacs-integration',
    url: 'https://github.com/Bahmni/pacs-integration.git',
    branch: 'master',
    target: path.join(baseDir, '01_Sistema', 'pacs-integration'),
    desc: 'Servicio de integración PACS y sincronización con DCM4CHEE'
  },
  {
    name: 'bahmni-core',
    url: 'https://github.com/Bahmni/bahmni-core.git',
    branch: 'master',
    target: path.join(baseDir, '01_Sistema', 'bahmni-core'),
    desc: 'Módulos OpenMRS centrales y clientes Atomfeed de Bahmni'
  },
  // 04_Pruebas_Funcionales
  {
    name: 'bahmni-lite-e2e-tests',
    url: 'https://github.com/Bahmni/bahmni-lite-e2e-tests.git',
    branch: 'master',
    target: path.join(baseDir, '04_Pruebas_Funcionales', 'bahmni-lite-e2e-tests'),
    desc: 'Pruebas E2E automatizadas oficiales de Bahmni'
  },
  {
    name: 'bahmni-appointments-functional-tests',
    url: 'https://github.com/Bahmni/bahmni-appointments-functional-tests.git',
    branch: 'master',
    target: path.join(baseDir, '04_Pruebas_Funcionales', 'bahmni-appointments-functional-tests'),
    desc: 'Suite de pruebas funcionales para agendamiento de citas de Bahmni'
  },
  // 05_Pruebas_Rendimiento
  {
    name: 'performance-test',
    url: 'https://github.com/Bahmni/performance-test.git',
    branch: 'master',
    target: path.join(baseDir, '05_Pruebas_Rendimiento', 'performance-test'),
    desc: 'Suite de pruebas de rendimiento (Gatling/JMeter) de Bahmni'
  },
  {
    name: 'bahmni-test-data-generator',
    url: 'https://github.com/Bahmni/bahmni-test-data-generator.git',
    branch: 'master',
    target: path.join(baseDir, '05_Pruebas_Rendimiento', 'bahmni-test-data-generator'),
    desc: 'Generador de datos de prueba sintéticos para pruebas de carga y rendimiento'
  },
  // 06_Arquitectura_y_Datos
  {
    name: 'bahmni-decision-records',
    url: 'https://github.com/Bahmni/bahmni-decision-records.git',
    branch: 'master',
    target: path.join(baseDir, '06_Arquitectura_y_Datos', 'bahmni-decision-records'),
    desc: 'Registros de Decisiones Arquitectónicas (ADR) de Bahmni'
  }
];

const results = [];

for (const repo of repos) {
  console.log(`\n========================================`);
  console.log(`Cloning ${repo.name} (${repo.url})...`);
  if (fs.existsSync(repo.target)) {
    console.log(`Directory ${repo.target} already exists. Skipping clone.`);
    continue;
  }
  try {
    const cmd = repo.branch && repo.branch !== 'master'
      ? `git clone --depth 1 --branch ${repo.branch} ${repo.url} "${repo.target}"`
      : `git clone --depth 1 ${repo.url} "${repo.target}"`;
    console.log(`Executing: ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
    
    // Obtain commit details
    const commitHash = execSync(`git rev-parse HEAD`, { cwd: repo.target }).toString().trim();
    const commitDate = execSync(`git log -1 --format=%ci`, { cwd: repo.target }).toString().trim();
    const branchName = execSync(`git rev-parse --abbrev-ref HEAD`, { cwd: repo.target }).toString().trim();

    results.push({
      component: repo.name,
      repoUrl: repo.url,
      branch: branchName,
      commit: commitHash,
      date: commitDate,
      localPath: repo.target,
      description: repo.desc
    });
    console.log(`Successfully cloned ${repo.name} at commit ${commitHash} (${commitDate})`);
  } catch(err) {
    console.error(`Failed to clone ${repo.name}:`, err.message);
  }
}

fs.writeFileSync(path.join(baseDir, 'scripts', 'cloned_repos_summary.json'), JSON.stringify(results, null, 2), 'utf8');
console.log('\nAll repositories cloned. Summary saved.');
