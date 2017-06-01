#!/usr/bin/env node --harmony
'use strict';

const getConfig = require('./config').getConfig;
const shell = require('shelljs');
const BUILD_COMMAND = 'yarn build';

const createDeployCommand = ({server, username, path, port}) => {
  return `scp -P ${port} -r build ${username}@${server}:${path}`;
};

exports.default = () => {
  const config = getConfig();
  if(!config) {
    console.error('Config file not found, init deployer with `deploy-react-app init`');
    return;
  }

  if(shell.exec(BUILD_COMMAND).code !== 0) {
    console.error('Build failed');
    shell.exit(1);
  }

  if(shell.exec(createDeployCommand(config)).code !== 0) {
    console.error('Deployment failed');
    shell.exit(1);
  }
  console.info('Deployed :)')
};
