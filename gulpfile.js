var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('static', function() {
  gulp.src('src/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  gulp.src('src/sass/application.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build/css/'));
});

gulp.task('default', ['static', 'sass']);

gulp.watch('src/**/*.*', ['default']);
