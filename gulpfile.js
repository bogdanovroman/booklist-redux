var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('scss', function() {
    gulp.src('public/scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch', ['scss'], function() {
    gulp.watch('public/scss/**/*.scss', ['scss']);
});
