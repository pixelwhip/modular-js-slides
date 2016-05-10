(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * depA.js
 */
var depC = require('./depC');

function depA() {
  console.log('Hello, I\'m a ' + depC.name );
}

exports.depA = depA;

},{"./depC":2}],2:[function(require,module,exports){
/**
 * depC.js
 */

var depC = {
  'name': 'Plain Old Javascript Object (POJO)'
};

exports.depC = depC;

},{}],3:[function(require,module,exports){
/**
 * entryB.js
 */
var depA = require('./depA');

depA();

},{"./depA":1}]},{},[3]);
