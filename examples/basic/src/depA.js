/**
 * depA.js
 */
var depC = require('./depC');

function depA() {
  console.log('Hello, I\'m a ' + depC.name );
}

exports.depA = depA;
