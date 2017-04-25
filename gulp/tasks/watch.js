const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
      server: 'app',
      notify: false
  });

  watch('./app/*.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/css/**/*.css', function(){
    gulp.start('injectCss');
  });

  watch('./app/assets/js/**/*.js', function() {
    gulp.start('injectJs');
  })
});

gulp.task('injectCss', ['css'], function() {
  return gulp.src('./app/temp/assets/css/styles.css')
             .pipe(browserSync.stream());
});

gulp.task('injectJs', ['webpack'], function() {
  browserSync.reload();
});
