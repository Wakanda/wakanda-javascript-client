const { spawnSync } = require('child_process');
const { spawn } = require('child_process');
const testServer = require('./test/connect/server');

testServer.start(function () {
  spawnSync('npm run build', {
    shell: true,
    stdio: 'inherit',
  });
  const testProcess = spawn('npm run test:all', {
    shell: true,
    stdio: 'inherit',
  });
  testProcess.on('close', (code) => {
    testServer.stop(function () {
      process.exitCode = code;
    });
  });
});