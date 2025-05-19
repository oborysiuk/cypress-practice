const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    retries:{
      openMode: 2,
      runMode: 3
    },
    viewportWidth: 300,
    viewportHeight: 600
  },
});
