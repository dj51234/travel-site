const gulp = require('gulp');
const sprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const remove = require('del');

gulp.task('deleteOldSprite',function() {
  return remove(['./app/temp/assets/images', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['deleteOldSprite'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
             .pipe(sprite({
               mode: {
                 css: {
                   sprite: 'svg/sprite.svg',
                   render: {
                     css: {
                       template: './gulp/templates/sprite.css'
                     }
                   }
                 }
               }
             }))
             .pipe(gulp.dest('./app/temp/assets/images'));
});

gulp.task('copySvg', ['createSprite'], function() {
  return gulp.src('./app/temp/assets/images/css/**/*.svg')
             .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('deleteTempSprite', ['copySvg'], function() {
  return remove('./app/temp/assets/images');
});

gulp.task('importSprite', ['deleteOldSprite', 'createSprite', 'copySvg', 'deleteTempSprite'], function() {
  return gulp.src('./app/temp/assets/images/css/*.css')
             .pipe(rename('_sprite.css'))
             .pipe(gulp.dest('./app/assets/css/modules'))
});
