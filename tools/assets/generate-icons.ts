#!/usr/bin/env ts-node

import { readdirSync, statSync, readFileSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';
import { fileName, forEachFile, mkdir } from '../utils';
import { cwd } from 'process';

const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const IMAGE_DIR = join(cwd(), 'assets/brands');
const DIST_ROOT = join(cwd(), 'assets/brands-out');

async function generateIcons(filePath: string) {
  const imageFile = readFileSync(filePath);
  const distFolder = join(DIST_ROOT, fileName(filePath));

  mkdir(distFolder);

  for (const size of ICON_SIZES) {
    const iconName = `icon-${size}x${size}.png`;
    const iconFilePath = join(distFolder, iconName);
    await sharp(imageFile).resize(size, size).toFile(iconFilePath);
  }
  sharp(imageFile).resize(32, 32).toFile(join(distFolder, 'favicon.ico'));
  sharp(imageFile)
    .resize(350, 150)
    .toFile(join(distFolder, 'icon-350x150.png'));
}

forEachFile(IMAGE_DIR, (filePath: string) => {
  generateIcons(filePath);
});
