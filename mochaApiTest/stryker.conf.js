module.exports = function(config) {
  config.set({

//    files: [{ pattern: 'src/__tests__/*.js', mutated: true, included: false},
files: [{ pattern: './mochaApiTest/test/**/*.js', mutated: true, included: false},
                    './mochaApiTest/test/**/*.js'],
//    mutate: ["test/*.js"],
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'mocha',
    transpilers: [],
    testFramework: 'mocha',
    coverageAnalysis: 'off'
  });
};
