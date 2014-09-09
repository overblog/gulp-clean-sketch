'use strict';

var cleanSketch = require('clean-sketch');
var gutil = require('gulp-util');
var through = require('through2');

module.exports = function() {
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new gutil.PluginError('gulp-clean-sketch', 'Streaming not supported'));
    }

    if (file.path.slice(-4).toLowerCase() != '.svg') {
      return cb(new gutil.PluginError('gulp-clean-sketch', 'Not an SVG image'));
    }

    file.contents = new Buffer(cleanSketch(file.contents.toString()));
    cb(null, file);
  });
};
