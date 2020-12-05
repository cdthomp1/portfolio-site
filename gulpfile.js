const minify = require('gulp-minify');

const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = './scripts/*.js';

function defaultTask() {
    return src(jsPath)
    .pipe(minify())
    .pipe(dest('dist/assets/js'));
  }
  
  exports.default = defaultTask