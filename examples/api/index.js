var fs = require('fs');
var browserify = require('browserify');
var b = browserify();

b.add([
  __dirname + '/src/entryB.js'
]);
b.bundle()
  .pipe(process.stdout);
b.bundle()
  .pipe(fs.createWriteStream(
    __dirname + '/build/bundleB.js'
));
