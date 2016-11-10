const startup = require('./startup/startup.js');
const test = require('./test/test.js');

let cctestutils = {
  startup: startup,
  test: test
};

module.exports = cctestutils;
