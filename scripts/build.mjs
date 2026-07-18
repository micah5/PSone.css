import { mkdir, readFile, writeFile } from 'node:fs/promises';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';

const sourcePath = 'src/PSone.css';
const source = await readFile(sourcePath, 'utf8');
const processed = await postcss([autoprefixer]).process(source, {
  from: sourcePath,
  map: false,
});
const rootCss = processed.css;
const distCss = rootCss.replaceAll('url("./fonts/', 'url("../fonts/');
const [rootMinified, distMinified] = await Promise.all([
  postcss([cssnano({ preset: 'default' })]).process(rootCss, { from: undefined, map: false }),
  postcss([cssnano({ preset: 'default' })]).process(distCss, { from: undefined, map: false }),
]);

await mkdir('dist', { recursive: true });
await Promise.all([
  writeFile('dist/PSone.css', distCss),
  writeFile('dist/PSone.min.css', distMinified.css),
  // Preserve the original root-level CDN paths for existing users.
  writeFile('PSone.css', rootCss),
  writeFile('PSone.min.css', rootMinified.css),
]);

console.log('Built PSone.css and PSone.min.css');
