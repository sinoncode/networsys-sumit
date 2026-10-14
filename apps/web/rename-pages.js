import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function getFiles(dir, ext = ['.js', '.jsx']) {
  let results = [];
  try {
    const list = readdirSync(dir);
    for (const file of list) {
      const filePath = join(dir, file);
      const stat = statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(filePath, ext));
      } else {
        if (ext.some(e => file.endsWith(e))) {
          results.push(filePath);
        }
      }
    }
  } catch (e) {}
  return results;
}

const files = [...getFiles('src'), ...getFiles('app')];

for (const file of files) {
  let content = readFileSync(file, 'utf-8');
  let changed = false;

  if (content.includes('@/pages/')) {
    content = content.replace(/@\/pages\//g, '@/views/');
    changed = true;
  }

  if (changed) {
    writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
