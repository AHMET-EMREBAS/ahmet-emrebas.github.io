const { execSync, exec } = require('child_process');
const { readdirSync } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

// const project = process.argv[2];
// const type = process.argv[3];

// if (!project) {
//   throw new Error('Project name is requried!');
// }
// const resources = readdirSync(join(__dirname, 'resources', project));

// for (const r of resources) {
//   execSync(`npx nx g cli:${type} ${project} ${r.replace('.yaml', '')}`);
// }

const sources = ['payment'];

for (const s of sources) {
  execSync(`npx nx g cli:interface inventory ${s}`);
  execSync(`npx nx g cli:entity inventory ${s}`);
  execSync(`npx nx g cli:rest-module inventory ${s}`);
  execSync(`npx nx g cli:controller inventory ${s}`);
  execSync(`npx nx g cli:service inventory ${s}`);
}
