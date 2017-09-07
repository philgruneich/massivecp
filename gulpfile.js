const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe($.htmlmin({
      collapseWhiteSpace: true,
      removeComments: true,
      keepClosingSlash: true,
      html5: true,
      minifyCSS: true
    }))
    .pipe($.replace(/\>[\s\n\r]*\</g, '><'))
    .pipe($.replace(/\s{2,}/g, ''))
    .pipe(gulp.dest('dist'))
    .pipe($.if(browserSync.active, reload));
});

gulp.task('images', () => {
  return gulp.src('images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('serve', () => {

});