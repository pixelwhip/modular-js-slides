/**
 * entry.js
 */
var tpl = require('./templates/heading.nunj');
var tpl2 = require('./templates/heading2.nunj');
var today = new Date();
var context = {
  date: today.getDate() + '/' + (today.getMonth() + 1) + today.getFullYear()
};

console.log(tpl.render(context));
