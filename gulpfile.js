'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./assets/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);