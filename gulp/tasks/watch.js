const gulp = require('gulp');
const watch = require('gulp-watch');
const config = require('../config').watch;

gulp.task('watch', () => {
  watch(config.sass, gulp.task('sass'));
  watch(config.images, gulp.task('images'));
});
