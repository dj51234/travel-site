const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const minify = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('deleteDocsFolder', function() {
  return del(['./docs','./dist']);
});

gulp.task('optimizeImages', ['deleteDocsFolder', 'importSprite'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
               .pipe(imagemin({
                 progressive: true,
                 interlaced: true,
                 multipass: true
               }))
               .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('usemin', ['deleteDocsFolder', 'css', 'webpack'], function() {
  return gulp.src('./app/index.html')
             .pipe(usemin({
               css: [function() {return rev()}, function() {return minify()}],
               js: [function() {return rev()}, function() {return uglify()}]
             }))
             .pipe(gulp.dest('./docs'))
});

gulp.task('previewBuild', function() {
  browserSync.init({
      server: 'docs',
      notify: false
  });
});

gulp.task('build', ['deleteDocsFolder','optimizeImages', 'usemin'], function() {

});
