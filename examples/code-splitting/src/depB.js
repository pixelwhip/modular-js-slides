/**
 * depB.js
 */
var depC = require('./depC');

function depB() {
  console.log(depC.name);
};

exports.depB = depB;
