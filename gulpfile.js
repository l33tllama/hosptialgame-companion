var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('browser-sync', function(){
  browserSync.init({
      server: {
          baseDir: "./",
          port: 8000
      }
  });
  //gulp.watch(path.join("js", "*.js"), ['browser-sync']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('connect', function() {
    connect.server();
});

gulp.task('default', ['browser-sync']);
