#!/usr/bin/env node --harmony
'use strict';

const program = require('commander');
const initCommand = require('./bin/init').default;
const deployCommand = require('./bin/deploy').default;

program
  .version('0.0.1')

program
  .command('init')
  .description('Init it!')
  .action(initCommand);


program.parse(process.argv);

if(program.args.length === 0) {
    deployCommand();
}
