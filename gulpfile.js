const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const importcss = require('postcss-import');

gulp.task('default', function() {
  console.log('We ran the default task!');
});

gulp.task('html', function() {
  console.log('Addedmsome important html to page');
});

gulp.task('css', function() {
  return gulp.src('./app/assets/css/styles.css')
             .pipe(postcss([
               importcss,
               autoprefixer,
               cssvars,
               nested
             ]))
             .pipe(gulp.dest('./app/temp/assets/css'));
});

gulp.task('watch',function() {
  watch('./app/*.html',function() {
    gulp.start('html');
  });

  watch('./app/assets/css/**/*.css',function(){
    gulp.start('css');
  })
});
