var gulp = require('gulp'),
	inlineCss = require('gulp-inline-css'),
	htmlmin = require('gulp-htmlmin');

gulp.task('default', function() {
    return gulp.src('./html/*.html')
        .pipe(inlineCss())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./'));
});