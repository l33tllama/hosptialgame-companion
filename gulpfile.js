var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload      = browserSync.reload;
var path        = require('path');

gulp.task('browser-sync', ['sass'], function(){
  browserSync.init({
      server: {
          baseDir: "./",
          port: 8000
      }
  });
  gulp.watch(path.join("sass", "*.scss"), ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function(){
  gulp.src(path.join("sass", "*.scss"))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
  browserSync.reload();
});

gulp.task('connect', function() {
    connect.server();
});

//TODO: gulp-publish to make builds..

gulp.task('default', ['browser-sync']);
