const { execSync, exec } = require('child_process');
const { readdirSync } = require('fs');
const { join } = require('path');

const project = process.argv[2];

if (!project) {
  throw new Error('Project name is requried!');
}
const resources = readdirSync(join(__dirname, 'resources', project));

for (const r of resources) {
  exec(
    `npx nx g cli:interface ${project} ${r.replace('.yaml', '')}`,
    (err, stdout, stderr) => {
      console.log(err);
    }
  );
  exec(
    `npx nx g cli:entity ${project} ${r.replace('.yaml', '')}`,
    (err, stdout, stderr) => {
      console.log(err);
    }
  );
}
