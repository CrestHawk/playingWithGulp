const { src, dest } = require('gulp');

function streamTask() {
  return src('src/*.js')
    .pipe(dest('dist'));
}

exports.default = streamTask;