#!/usr/bin/env node --harmony
'use strict';

const program = require('commander');
const initCommand = require('./bin/init').default;

program
  .version('0.0.1')

program
  .command('init')
  .description('Init it!')
  .action(initCommand);

program.parse(process.argv);
