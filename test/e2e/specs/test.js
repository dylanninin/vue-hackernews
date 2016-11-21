// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.news-view')
      .assert.elementPresent('.news-list')
      // .assert.containsText('a', 'Built with Vue.js')
      .assert.elementCount('svg', 1)
      .end()
  }
}
