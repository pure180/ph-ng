// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};

// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
const saucelabsCapabilities = [{
  browserName: 'chrome',
  version: '54',
  platform: 'Windows 10',
  name: 'PaperHive (chrome)',
}, {
  browserName: 'firefox',
  version: '50',
  platform: 'Windows 10',
  name: 'PaperHive (firefox)'
}, {
  browserName: 'MicrosoftEdge',
  version: '14',
  platform: 'Windows 10',
  name: 'PaperHive (edge)',
}, {
  // Note: Safari 10 requires Selenium 3
  // (not yet running on SauceLabs as of 2017-01-09)
  browserName: 'safari',
  version: '9',
  platform: 'OS X 10.11',
  name: 'PaperHive (safari)',
}, {
  browserName: 'internet explorer',
  version: '11',
  platform: 'Windows 10',
  name: 'PaperHive (ie)',
}];
saucelabsCapabilities.forEach(capability => {
  capability['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
  capability.tags = ['frontend'];
  if (process.env.TRAVIS_PULL_REQUEST === 'false' && process.env.TRAVIS_BRANCH === 'master') {
    capability.tags.push('master');
  }
  capability.screenResolution = '1280x960';
});

// travis or jenkins -> use saucelabs
if (process.env.TRAVIS_JOB_NUMBER || process.env.SAUCE_ONDEMAND_BROWSERS) {
  exports.config.sauceUser = process.env.SAUCE_USERNAME || process.env.SAUCE_USER_NAME;
  exports.config.sauceKey = process.env.SAUCE_ACCESS_KEY || process.env.SAUCE_API_KEY;
  exports.config.sauceBuild = process.env.TRAVIS_BUILD_NUMBER;
  exports.config.multiCapabilities = saucelabsCapabilities;
} else {
  exports.config.capability = {
    'browserName': 'chrome'
  },
  exports.config.directConnect = true;
}
