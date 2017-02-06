var config = require('../../nightwatch.conf.BASIC.js');
'use strict';


module.exports = {
    'test if elements are visible and filling out the form on the signUp and press button': function(client) {
        client
            .url('http://nelisa123.projectcodex.co/signup')
            .assert.title('Nelisa')
            .assert.visible('input[name=username]')
            .assert.visible('input[name=email]')
            .assert.visible('input[name=password]')
            .assert.visible('input[name=confirmPassword]')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'Jack')
            .setValue('input[type=email]', 'Jack@gmail.com')
            .setValue('input[type=password]', 'JackPass')
            .setValue('input[type=password]', 'JackPass')
            .waitForElementVisible('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]', 1000)
            .click('button[type=submit]')
            // .waitForElementVisible('h4[id="warning"]', 1000)
            .pause(1000)
            .end();
    }
