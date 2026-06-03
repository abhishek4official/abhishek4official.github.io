import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const rootDir = path.resolve('..');

// 1. Create dist/vajrastocks/index.html
const distVajra = path.join(distDir, 'vajrastocks');
if (!fs.existsSync(distVajra)) {
  fs.mkdirSync(distVajra, { recursive: true });
}
fs.copyFileSync(
  path.join(distDir, 'index.html'),
  path.join(distVajra, 'index.html')
);
console.log('Copied index.html to dist/vajrastocks/index.html');

// Helper to recursively copy directories
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper to recursively delete directories
function deleteDirSync(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

// 2. Clean up root assets and vajrastocks folders to avoid stale files
const rootAssets = path.join(rootDir, 'assets');
const rootVajra = path.join(rootDir, 'vajrastocks');

console.log('Cleaning old root assets and vajrastocks directories...');
deleteDirSync(rootAssets);
deleteDirSync(rootVajra);

// 3. Copy everything from dist to root directory
console.log('Copying build files from dist to root directory...');
const entries = fs.readdirSync(distDir, { withFileTypes: true });
for (let entry of entries) {
  const srcPath = path.join(distDir, entry.name);
  const destPath = path.join(rootDir, entry.name);

  // Skip the 'src' directory itself to avoid overwriting source files
  if (entry.name === 'src') continue;

  if (entry.isDirectory()) {
    copyDirSync(srcPath, destPath);
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
}

console.log('Deployment build successfully copied to root directory!');
