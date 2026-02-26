const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  projectId: "eozc7v",
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

       on('task', {downloadFile})
       require('cypress-mochawesome-reporter/plugin')(on); 
    },
    specPattern: 'cypress/integration/examples/*.js',
    chromeWebSecurity : false,
    baseUrl :'https://demo.codenbox.com/',

      env: {
        // environment specific variable
        QA: {
          baseUrl :'https://codenboxautomationlab.com',
          practiceUrl : 'https://demo.codenboxautomationlab.com/practice/',
        },

        production: {
          baseUrl :'https://demo.codenbox.com/',
          apiUrl : 'https://api.demo.codenbox.com/',
        },

        development: {
          baseUrl :'https://dev.codenboxautomationlab.com',
          apiUrl : 'https://dev-api.codenboxautomationlab.com',
        },

        // test data global variable
        defaultEmail: 'demo@codenbox.com',
        defaultPassword: 'Hello123',
        timeoutThreshold: 6000, 

        invalidEmail : 'test@test.com',
        invalidPassword : 123456

      }
  },
});
