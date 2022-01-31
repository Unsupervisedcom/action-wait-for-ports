const core = require('@actions/core')
const github = require('@actions/github')
const tcpPortUsed = require('tcp-port-used');

try {
    const ports = core.getInput('ports').split(",")
    const maxWait = parseInt(core.getInput('max-wait'))
    const checkInterval = parseInt(core.getInput('check-interval'))

    // wait for ports
    ports.forEach(port => {
        core.info(`Waiting for port ${port}`)
        tcpPortUsed.waitUntilUsed(parseInt(port), checkInterval, maxWait)
            .then(function () {
                core.info(`Port ${port} is ready.`);
            }).catch(error => {
            core.setFailed(`error waiting for port ${port}: ${error}`)
        });
    })
} catch (error) {
    core.setFailed(error)
}