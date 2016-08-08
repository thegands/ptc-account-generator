require('babel-polyfill');
require('babel-register');


var fs = require('fs');
var createAccount = require('./src/ptc-account-generator').default;
var STORE_FILE = './accounts.txt';
var count = 0;

while (count <= 200) {
createAccount(count)
  .then(res => fs.appendFileSync(STORE_FILE, "\n\n" + JSON.stringify(res)))
  .catch(err => console.error(err));
count++;
}