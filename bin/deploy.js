#!/usr/bin/env node --harmony
'use strict';

const getConfig = require('./config').getConfig;
const shell = require('shelljs');
const BUILD_COMMAND = 'yarn build';

exports.default = () => {
  const config = getConfig();
  if(!config) {
    console.error('Config file not found, init deployer with `deploy-react-app init`');
    return;
  }

  if(shell.exec(BUILD_COMMAND).code !== 0) {
    console.error('error');
    shell.exit(1);
  }
};
