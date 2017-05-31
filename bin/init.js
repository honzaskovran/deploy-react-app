#!/usr/bin/env node --harmony
'use strict';

const inquirer = require('inquirer');

const validateString = (value) => value !== '';

const validateInt = (value) => {
  const reg = /^\d+$/;
  return reg.test(value) || 'Fill integer, please';
};

const questions = [
  {
    type: 'input',
    name: 'server',
    message: 'Server',
    validate: validateString
  },
  {
    type: 'input',
    name: 'username',
    message: 'Username',
    validate: validateString
  },
  {
    type: 'input',
    name: 'path',
    message: 'Path',
    validate: validateString
  },
  {
    type: 'input',
    name: 'port',
    message: 'Port',
    validate: validateInt
  }
];

exports.default = () => {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
  });
};
