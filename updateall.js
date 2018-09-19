const fs = require('fs');
const execSync = require('child_process').execSync;

function update() {
  let file  = fs.readFileSync('package.json');
  let content = JSON.parse(file);

  Object.keys(content.devDependencies).forEach(dep => execSync(`npm i --save-dev ${dep}@latest`));
  Object.keys(content.dependencies).forEach(dep => execSync(`npm i --save ${dep}@latest`));
}

update();