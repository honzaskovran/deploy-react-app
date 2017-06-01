#!/usr/bin/env node --harmony
'use strict';

const fs = require('fs');
const CONFIG_FILE_NAME = 'deploy-react-app.json';

const saveConfig = (json) => {
  fs.writeFile(CONFIG_FILE_NAME, JSON.stringify(json, null, 2), (err) => {
    if(err) {
      console.error(err);
    }
    console.info('New config file saved');
  })
};

exports.saveConfig = saveConfig;
