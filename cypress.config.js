const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ck8cw4",
  e2e: {
    experimentalPromptCommand: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
