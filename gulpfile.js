'use strict';

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

var path = {
    build: {
        html: '/',
        js: 'd-forms/',
        css: 'd-forms/',
        img: 'd-forms/img/',
        fonts: 'd-forms/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/d-forms.js',
        style: 'src/scss/d-forms.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './d-forms'
};

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(rigger()) 
        .pipe(sourcemaps.init()) 
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.build.js));
});

gulp.task('styles:build', function () {
    gulp.src(path.src.style) 
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['src/scss/'],
            outputStyle: 'compressed',
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('images:build', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'styles:build',
    'fonts:build',
    'images:build'
]);


gulp.task('default', ['build']);