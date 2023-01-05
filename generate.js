const { execSync, exec } = require('child_process');
const { readdirSync } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const project = process.argv[2];
const type = process.argv[3];

if (!project) {
  throw new Error('Project name is requried!');
}
const resources = readdirSync(join(__dirname, 'resources', project));

for (const r of resources) {
  execSync(`npx nx g cli:${type} ${project} ${r.replace('.yaml', '')}`);
}
