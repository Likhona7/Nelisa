var config = require('../../nightwatch.conf.BASIC.js');


const loginCommands = {
  login(email, pass) {
    return this
      .setValue('input[type=text]', 'nelisa')
      .setValue('input[type=password]', 'pas')
      .waitForElementVisible('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]', 1000)
      .waitForElementVisible('h4[id="warning"]', 1000)
      .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
  }
};

export default {
  url: 'http://nelisa123.projectcodex.co/login',
  commands: [loginCommands],
  elements: {
    emailInput: {
      selector: 'input[type=text]'
    },
    passInput: {
      selector: 'input[name=password]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    }
  }
};
