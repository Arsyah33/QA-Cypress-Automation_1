const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

   // Esbuild preprocessor
  on(
    "file:preprocessor",
    createBundler({
      sourcemap: "inline",
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Download plugin
  on("task", { downloadFile });

  // Mochawesome reporter
  require("cypress-mochawesome-reporter/plugin")(on);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "eozc7v",
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true,
  },

  
  e2e: {
    setupNodeEvents,
    experimentalStudio:true,
    // setupNodeEvents(on, config) {
      // implement node event listeners here

       //on('task', {downloadFile})
      // require('cypress-mochawesome-reporter/plugin')(on); 
    //},
    specPattern: 'cypress/integration/examples/cucumber_bdd/*.feature',
    //specPattern: 'cypress/integration/examples/*.js',
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity : false,
    //experimentalModifyObstructiveThirdPartyCode: true,
    baseUrl :'https://demo.codenbox.com/',

      env: {
        
        // environment specific variable
        TAGS:"@smoke",

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
        timeoutThreshold: 15000, 

        invalidEmail : 'test@test.com',
        invalidPassword : 123456

      }
  },
});
