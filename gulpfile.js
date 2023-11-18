const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        // .pipe(obfuscate())
        .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(styles, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false} , gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false} , gulp.parallel(scripts))
}