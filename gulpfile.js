var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');

gulp.task('static', function() {
  gulp.src(['src/index.html'])
  .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  gulp.src('src/sass/application.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build/css/'));
});

gulp.task('webpack', ['static'], function() {
  gulp.src('./src/js/app.jsx')
    .pipe(webpack({
      module: {
        loaders: [
          { test: /\.jsx$/, loader: 'jsx-loader' },
        ],
      },
      output: {
        filename: 'app.js'
      }
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('default', ['static', 'sass', 'webpack']);

gulp.watch('src/**/*.*', ['default']);
