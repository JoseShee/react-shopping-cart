module.exports = function(config) {
  config.set({

    mutator: 'javascript',
    testRunner: 'mocha',
    testFramework: 'mocha',
    coverageAnalysis: 'off',
    reporters: ['clear-text', 'progress'],
    mochaOptions: {
//          spec: ['test/**/*.js'],
          spec: ['mochaApiTest/test/test.js'],
        },
        maxConcurrentTestRunners: 2
  });
};
