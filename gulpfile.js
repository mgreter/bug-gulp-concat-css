var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('test-01', function () {
  var dst = gulp.src(['design/src/styles.css'])
    .pipe(concatCss('../dst/test-01.css'))
    .pipe(gulp.dest('design/src'));
  return dst;
});

gulp.task('test-02', function () {
  var dst = gulp.src(['design/src/styles.css'])
    .pipe(concatCss('dst/test-02.css'))
    .pipe(gulp.dest('design'));
  return dst;
});

gulp.task('test-03', function () {
  var dst = gulp.src(['design/src/styles.css'])
    .pipe(concatCss('test-03.css'))
    .pipe(gulp.dest('design/dst'));
  return dst;
});

gulp.task('test-04', function () {
  var dst = gulp.src(['styles.css'], { cwd: 'design/src' })
    .pipe(concatCss('test-04.css'))
    .pipe(gulp.dest('../dst', { cwd: 'design/src' }));
  return dst;
});

gulp.task('test-05', function () {
  var dst = gulp.src(['design/src/styles.css'])
    .pipe(concatCss('../dst/test-05.css'))
    .pipe(gulp.dest('design/dst'));
  return dst;
});

gulp.task('build', [
  'test-01',
  'test-02',
  'test-03',
  'test-04',
  'test-05',
]);

// define default build task
gulp.task('default', ['build']);
