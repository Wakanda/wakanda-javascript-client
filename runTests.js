var spawnSync = require('child_process').spawnSync;
var spawn = require('child_process').spawn;
var testServer = require('./test/connect/server');

testServer.start(function () {
    spawnSync('npm run build', { shell: true, stdio: 'inherit' });
    var testProcess = spawn('npm run test:all', { shell: true, stdio: 'inherit' });
    testProcess.on('close', (code) => {
        testServer.stop(function () {
            process.exitCode = code;
        });
    });
});