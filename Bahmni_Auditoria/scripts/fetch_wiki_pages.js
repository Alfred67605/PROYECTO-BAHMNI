const https = require('https');
const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/llano/Downloads/PROYEC/Bahmni_Auditoria';
const origDir = path.join(baseDir, '02_Documentacion_Original', 'wiki_pages');
const mdDir = path.join(baseDir, '03_Documentacion_MD');

[origDir, mdDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Simple HTML to Markdown converter
function htmlToMarkdown(html) {
  if (!html) return '';
  let md = html;

  // Remove scripts, styles
  md = md.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  md = md.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // Pre / code blocks
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (m, code) => {
    return '\n```\n' + code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') + '\n```\n';
  });
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (m, code) => {
    return '\n```\n' + code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') + '\n```\n';
  });
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (m, code) => {
    return '`' + code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') + '`';
  });

  // Headers
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n');
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n');

  // Bold & Italic
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Links
  md = md.replace(/<a\s+[^>]*href=\"([^\"]*)\"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, text) => {
    const cleanText = text.replace(/<[^>]+>/g, '').trim();
    return cleanText ? `[${cleanText}](${href})` : href;
  });

  // Images
  md = md.replace(/<img\s+[^>]*src=\"([^\"]*)\"[^>]*alt=\"([^\"]*)\"[^>]*>/gi, '![$2]($1)');
  md = md.replace(/<img\s+[^>]*src=\"([^\"]*)\"[^>]*>/gi, '![]($1)');

  // Tables
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (m, tableContent) => {
    let rows = [];
    let rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rMatch;
    while ((rMatch = rowRegex.exec(tableContent)) !== null) {
      let cells = [];
      let cellRegex = /<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi;
      let cMatch;
      while ((cMatch = cellRegex.exec(rMatch[1])) !== null) {
        cells.push(cMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
      }
      if (cells.length > 0) rows.push(cells);
    }
    if (rows.length === 0) return '';
    let colCount = Math.max(...rows.map(r => r.length));
    let tableMd = '\n';
    rows.forEach((r, idx) => {
      while (r.length < colCount) r.push('');
      tableMd += '| ' + r.join(' | ') + ' |\n';
      if (idx === 0) {
        tableMd += '| ' + Array(colCount).fill('---').join(' | ') + ' |\n';
      }
    });
    return tableMd + '\n';
  });

  // Lists
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  md = md.replace(/<ul[^>]*>/gi, '\n');
  md = md.replace(/<\/ul>/gi, '\n');
  md = md.replace(/<ol[^>]*>/gi, '\n');
  md = md.replace(/<\/ol>/gi, '\n');

  // Paragraphs & line breaks
  md = md.replace(/<br\s*[\/]?>/gi, '\n');
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');

  // Strip remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // HTML entities
  md = md.replace(/&nbsp;/g, ' ')
         .replace(/&lt;/g, '<')
         .replace(/&gt;/g, '>')
         .replace(/&amp;/g, '&')
         .replace(/&quot;/g, '"')
         .replace(/&#39;/g, "'");

  // Clean up excessive newlines
  md = md.replace(/\n{3,}/g, '\n\n').trim();
  return md;
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch(e) { reject(e); }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 100)}`));
        }
      });
    }).on('error', reject);
  });
}

const targetPages = [
  { id: '3655991297', slug: 'bahmni-standard-performance-testing-reports', category: 'Pruebas_Rendimiento' },
  { id: '3117744129', slug: 'getting-started-quickly-with-bahmni-on-docker', category: 'Instalacion' },
  { id: '299630726', slug: 'running-bahmni-on-docker', category: 'Instalacion' },
  { id: '32014338', slug: 'user-guide', category: 'Manual_Usuario' },
  { id: '2392073', slug: 'implementers-guide', category: 'Manual_Implementador' },
  { id: '2812969012', slug: 'architecture-technical-documentation', category: 'Arquitectura' }
];

async function processPage(target) {
  console.log(`Fetching page ${target.id}: ${target.slug}...`);
  try {
    const pageUrl = `https://bahmni.atlassian.net/wiki/rest/api/content/${target.id}?expand=body.storage,body.view,version,metadata.labels,history`;
    const pageData = await fetchJson(pageUrl);
    
    const title = pageData.title || target.slug;
    const versionNum = pageData.version ? pageData.version.number : 1;
    const updatedDate = pageData.version ? pageData.version.when : '';
    const author = (pageData.version && pageData.version.by) ? pageData.version.by.displayName : '';
    const htmlView = (pageData.body && pageData.body.view) ? pageData.body.view.value : '';
    const htmlStorage = (pageData.body && pageData.body.storage) ? pageData.body.storage.value : '';

    // Save raw HTML view and storage JSON
    const origHtmlPath = path.join(origDir, `${target.id}_${target.slug}.html`);
    const origJsonPath = path.join(origDir, `${target.id}_${target.slug}.json`);
    fs.writeFileSync(origHtmlPath, `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title></head><body><h1>${title}</h1>${htmlView}</body></html>`, 'utf8');
    fs.writeFileSync(origJsonPath, JSON.stringify(pageData, null, 2), 'utf8');

    // Convert to Markdown
    const mdContent = `---
id: "${target.id}"
title: "${title}"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/${target.id}/${encodeURIComponent(target.slug)}"
version: ${versionNum}
updated: "${updatedDate}"
author: "${author}"
category: "${target.category}"
download_date: "${new Date().toISOString()}"
---

# ${title}

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/${target.id})  
> **Versión del documento:** v${versionNum} (${updatedDate}) | **Autor/Editor:** ${author}

---

${htmlToMarkdown(htmlView)}
`;
    const mdFilePath = path.join(mdDir, `${target.id}_${target.slug}.md`);
    fs.writeFileSync(mdFilePath, mdContent, 'utf8');
    console.log(`Saved Markdown to: ${mdFilePath} (${mdContent.length} bytes)`);

    // Also copy performance report to 05_Pruebas_Rendimiento
    if (target.category === 'Pruebas_Rendimiento') {
      const perfReportPath = path.join(baseDir, '05_Pruebas_Rendimiento', 'BAHMNI_STANDARD_PERFORMANCE_TESTING_REPORTS.md');
      fs.writeFileSync(perfReportPath, mdContent, 'utf8');
      console.log(`Copied report to: ${perfReportPath}`);
    }

    // Also copy Architecture to 06_Arquitectura_y_Datos
    if (target.category === 'Arquitectura') {
      const archPath = path.join(baseDir, '06_Arquitectura_y_Datos', 'ARQUITECTURA_Y_DOCUMENTACION_TECNICA.md');
      fs.writeFileSync(archPath, mdContent, 'utf8');
      console.log(`Copied architecture to: ${archPath}`);
    }

    // Also check child pages
    try {
      const childrenUrl = `https://bahmni.atlassian.net/wiki/rest/api/content/${target.id}/child/page?limit=25`;
      const childrenData = await fetchJson(childrenUrl);
      if (childrenData.results && childrenData.results.length > 0) {
        console.log(`Found ${childrenData.results.length} child pages for ${target.title || target.slug}`);
        for (const child of childrenData.results) {
          const childSlug = child.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          console.log(`  -> Child: ${child.id} | ${child.title}`);
          await processPage({ id: child.id, slug: childSlug, category: target.category + '_Sub' });
        }
      }
    } catch(err) {
      console.warn(`Could not fetch children for ${target.id}:`, err.message);
    }

  } catch(err) {
    console.error(`Error processing page ${target.id}:`, err);
  }
}

async function main() {
  for (const p of targetPages) {
    await processPage(p);
  }
  console.log('Finished fetching wiki documentation pages.');
}

main();
