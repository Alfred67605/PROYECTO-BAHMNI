const https = require('https');
const fs = require('fs');
const path = require('path');

const fileId = '11tsmx6MtKOJXl5EGvwGZ7GymAbUiwoF6';
const destPath = 'c:/Users/llano/Downloads/PROYEC/Bahmni_Auditoria/02_Documentacion_Original/Confluence_Bahmni_Export_27Sep2023.pdf';

function downloadFile(url, cookies = '') {
  const options = new URL(url);
  const reqOptions = {
    hostname: options.hostname,
    path: options.pathname + options.search,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Cookie': cookies
    }
  };

  https.get(reqOptions, (res) => {
    console.log('Status:', res.statusCode);
    const newCookies = res.headers['set-cookie'] ? res.headers['set-cookie'].map(c => c.split(';')[0]).join('; ') : cookies;

    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log('Redirect to:', res.headers.location);
      let nextUrl = res.headers.location;
      if (nextUrl.startsWith('/')) {
        nextUrl = 'https://' + options.hostname + nextUrl;
      }
      downloadFile(nextUrl, newCookies);
      return;
    }

    const contentType = res.headers['content-type'] || '';
    console.log('Content-Type:', contentType, 'Content-Length:', res.headers['content-length']);

    if (contentType.includes('text/html')) {
      // It might be the confirmation page
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => {
        console.log('HTML body received, checking for confirm token...');
        const confirmMatch = body.match(/confirm=([a-zA-Z0-9_-]+)/) || body.match(/name=\"confirm\" value=\"([^\"]+)\"/);
        const uuidMatch = body.match(/uuid=([a-zA-Z0-9_-]+)/);
        if (confirmMatch) {
          const confirmToken = confirmMatch[1];
          console.log('Confirm token found:', confirmToken);
          const confirmUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=${confirmToken}` + (uuidMatch ? `&uuid=${uuidMatch[1]}` : '');
          downloadFile(confirmUrl, newCookies);
        } else {
          // Look for direct download link in HTML
          const linkMatch = body.match(/href=\"(\/download\/[^\"]+)\"/i) || body.match(/action=\"([^\"]+download[^\"]*)\"/i) || body.match(/href=\"(https:\/\/drive\.usercontent\.google\.com\/download[^\"]+)\"/i);
          if (linkMatch) {
            let next = linkMatch[1].replace(/&amp;/g, '&');
            if (next.startsWith('/')) next = 'https://' + options.hostname + next;
            console.log('Found next download link:', next);
            downloadFile(next, newCookies);
          } else {
            console.log('Snippet of HTML:', body.slice(0, 500));
          }
        }
      });
      return;
    }

    // Binary stream!
    console.log('Starting file write to:', destPath);
    const fileStream = fs.createWriteStream(destPath);
    let downloaded = 0;
    const total = parseInt(res.headers['content-length'] || '0', 10);

    res.on('data', chunk => {
      downloaded += chunk.length;
      fileStream.write(chunk);
      if (downloaded % (10 * 1024 * 1024) < chunk.length) {
        console.log(`Progress: ${(downloaded / 1024 / 1024).toFixed(1)} MB / ${(total / 1024 / 1024).toFixed(1)} MB`);
      }
    });

    res.on('end', () => {
      fileStream.end();
      console.log(`Download finished! Total bytes: ${downloaded}`);
    });
  }).on('error', err => console.error(err));
}

downloadFile(`https://drive.google.com/uc?export=download&id=${fileId}`);
