//  extraer funcionalidades de las dependencias

//  gulp
const { src, dest, watch, parallel } = require('gulp');

//  css
const sass =  require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//  imagenes
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const avif = require('gulp-avif');

//  creando una tarea
function css(done) {
    //  identificar el sass, compilarlo y almacenarlo
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest('build/css'));

    //  le avisa a gulp cuando se termina la tarea
    done();
}

function toWebp(done) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));

    done();
}

function toAvif(done) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));

    done();
}

function images(done) {

    const opciones = {
      optimizationLevel: 3
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
        .pipe(dest('build/img'));


    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.images = images;
exports.toWebp = toWebp;
exports.toAvif = toAvif;
exports.dev = parallel(images, toWebp, toAvif, dev);