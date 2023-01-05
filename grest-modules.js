const { execSync, exec } = require('child_process');
const { readdirSync } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const project = process.argv[2];

if (!project) {
  throw new Error('Project name is requried!');
}
const resources = readdirSync(join(__dirname, 'resources', project)).filter(
  (e) => !e.endsWith('.ts')
);

for (const r of resources) {
  execSync(`npx nx g cli:rest-module ${project} ${r.replace('.yaml', '')}`);
}
