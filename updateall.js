const fs = require('fs');
const execSync = require('child_process').execSync;

function update() {
  let file  = fs.readFileSync('package.json');
  let content = JSON.parse(file);

  for (let devDep in content.devDependencies) {
    execSync(`npm i --save-dev ${devDep}@latest`);
  }

  for (let dep in content.dependencies) {
    execSync(`npm i --save ${dep}@latest`);
  }
};

update();