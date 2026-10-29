const fs = require('fs');
const zlib = require('zlib');

function extractPdfText(pdfPath) {
  const data = fs.readFileSync(pdfPath);
  let textOut = '';
  let pos = 0;

  while (pos < data.length) {
    const streamStart = data.indexOf('stream', pos);
    if (streamStart === -1) break;
    
    // Look for newline after 'stream'
    let start = streamStart + 6;
    if (data[start] === 0x0d && data[start + 1] === 0x0a) start += 2;
    else if (data[start] === 0x0a || data[start] === 0x0d) start += 1;

    const streamEnd = data.indexOf('endstream', start);
    if (streamEnd === -1) break;

    const chunk = data.slice(start, streamEnd);
    try {
      const decompressed = zlib.inflateSync(chunk);
      const str = decompressed.toString('latin1');
      // Look for text in BT ... ET blocks
      const btRegex = /BT([\s\S]*?)ET/g;
      let btMatch;
      while ((btMatch = btRegex.exec(str)) !== null) {
        const block = btMatch[1];
        // match TJ and Tj
        const tjRegex = /\(([\s\S]*?)\)\s*Tj|\[([\s\S]*?)\]\s*TJ/g;
        let tjMatch;
        while ((tjMatch = tjRegex.exec(block)) !== null) {
          if (tjMatch[1]) {
            textOut += tjMatch[1] + ' ';
          } else if (tjMatch[2]) {
            const inner = tjMatch[2].replace(/\((.*?)\)/g, '$1 ');
            textOut += inner + ' ';
          }
        }
        textOut += '\n';
      }
    } catch(e) {
      // not compressed or not flate
    }
    pos = streamEnd + 9;
  }
  return textOut;
}

const t1 = extractPdfText('c:/Users/llano/Documents/OCTAVO SEMESTRE/AUDITORIA/Actividad1.pdf');
fs.writeFileSync('c:/Users/llano/Downloads/PROYEC/Bahmni_Auditoria/scripts/actividad1_text.txt', t1, 'utf8');
console.log('Actividad 1 text extracted, length:', t1.length);

const t2 = extractPdfText('c:/Users/llano/Documents/OCTAVO SEMESTRE/AUDITORIA/Actividad_grupal2.pdf');
fs.writeFileSync('c:/Users/llano/Downloads/PROYEC/Bahmni_Auditoria/scripts/actividad2_text.txt', t2, 'utf8');
console.log('Actividad 2 text extracted, length:', t2.length);
