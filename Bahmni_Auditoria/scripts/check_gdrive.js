const https = require('https');

const url = 'https://drive.google.com/drive/folders/1-ydzl5k1sb6OwJi7_ivjMFAmNAut_FqT';

function fetchUrl(targetUrl) {
  https.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    console.log('Status code:', res.statusCode);
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log('Redirecting to:', res.headers.location);
      fetchUrl(res.headers.location);
      return;
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Length:', data.length);
      const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
      console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
      // Look for filenames or data items
      const regex = /\[\"([^\"]+\.(?:zip|pdf|html|xml|tar|gz|7z))\"/gi;
      let match;
      const files = [];
      while ((match = regex.exec(data)) !== null) {
        files.push(match[1]);
      }
      console.log('Found files in payload:', files);
      // Search for any mention of Bahmni or Wiki
      const matchesBahmni = data.match(/Bahmni[^"<>\\]{0,100}/gi);
      if (matchesBahmni) {
        console.log('Mentions of Bahmni:', matchesBahmni.slice(0, 10));
      }
    });
  }).on('error', err => console.error(err));
}

fetchUrl(url);
