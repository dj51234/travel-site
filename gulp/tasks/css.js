const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const importcss = require('postcss-import');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');

gulp.task('css', function() {
  return gulp.src('./app/assets/css/styles.css')
             .pipe(postcss([
               importcss,
               mixins,
               autoprefixer,
               cssvars,
               hexrgba,
               nested
             ]))
             .on('error', function(err) {
               console.log(err.toString());
               this.emit('end');
             })
             .pipe(gulp.dest('./app/temp/assets/css'));
});
