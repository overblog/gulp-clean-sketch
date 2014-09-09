# gulp-clean-sketch

> Cleanup [Sketch](http://bohemiancoding.com/sketch/) SVG files

_Issues with the output should be reported on the [clean-sketch issue tracker](https://github.com/overblog/clean-sketch/issues)._

## Install

```sh
$ npm install --save-dev gulp-clean-sketch
```

## Usage

```js
var cleanSketch = require('gulp-clean-sketch');

gulp.task('icons', function() {
  return gulp.src('assets/*.svg')
    .pipe(cleanSketch())
    .pipe(gulp.dest('dist/icons'));
});
```

## API

### cleanSketch()

Removes Sketch namespaces and metadata.

## License

MIT © Overblog
