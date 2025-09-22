const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "496opc",
  e2e: {
    experimentalStudio: true,
    experimentalPromptCommand: true,
    fixturesFolder: false,
    supportFile: false,
  },
});
