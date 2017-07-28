const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const sourcemaps = require('gulp-sourcemaps');

gulp.task('style', function () {
  return gulp.src('./scss/main.scss')
    .pipe(plumber({errorHandler: notify.onError("Style Build Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
      .pipe(sass({ style: 'expanded' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    open: false,
    server: {
      baseDir: './'
    }
  })
});

gulp.task('reload', function() {
  return gulp.src('./**/*')
  .pipe(browserSync.reload({
    stream: true
  }));
});

/////////////////////////////////////////////////
// Finalization tasks
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('./scss/**/*.scss', ['style']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('./js/**/*.js', ['reload']);
  gulp.watch('./*.html', ['reload']);
});

// Default watcher
gulp.task('default', function(callback) {
  runSequence(['style', 'browserSync', 'watch'], callback)
});

// Final build
gulp.task('build', function (callback) {
  runSequence(['style', 'browserSync', 'watch'], callback)
});

/////////////////////////////////////////////////
// Utils
function onError(err) {
  console.log(err);
  this.emit('end');
}
