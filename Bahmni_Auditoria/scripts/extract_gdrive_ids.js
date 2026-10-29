const https = require('https');

const url = 'https://drive.google.com/drive/folders/1-ydzl5k1sb6OwJi7_ivjMFAmNAut_FqT';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Search patterns for file ID and name
    // Typically in JSON: ["ID",["NAME",...]] or similar
    const matches = [...data.matchAll(/\[\"([a-zA-Z0-9_-]{25,})\",\[\"([^\"]+)\"/g)];
    const items = [];
    for (const m of matches) {
      items.push({ id: m[1], name: m[2] });
    }
    console.log('Matches found with pattern 1:', items);

    // Alternative pattern: search around the filename
    const filenames = [
      'Confluence Bahmni Export 27Sep2023.pdf',
      'Bahmni_Confluence_Space_Export__24Sep2021.html.zip',
      'Wiki_Export_9_Jan_2017.zip'
    ];
    for (const fn of filenames) {
      let idx = 0;
      while ((idx = data.indexOf(fn, idx)) !== -1) {
        const snippet = data.slice(Math.max(0, idx - 150), Math.min(data.length, idx + 150));
        console.log(`\nSnippet around ${fn}:`, snippet);
        idx += fn.length;
      }
    }
  });
});
