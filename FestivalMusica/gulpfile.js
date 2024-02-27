//  extraer funcionalidades de las dependencias

//  gulp
const { src, dest, watch, parallel } = require('gulp');

//  css
const sass =  require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//  esto se incluye hasta el final
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

//  imagenes
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const avif = require('gulp-avif');

//  javascript
const terser = require('gulp-terser-js');

//  creando una tarea
function css(done) {
    //  identificar el sass, compilarlo y almacenarlo
    src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe( postcss([autoprefixer(), cssnano()]) )
        .pipe(sourcemaps.write('.'))
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

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}

exports.css = css;
exports.javascript = javascript;
exports.images = images;
exports.toWebp = toWebp;
exports.toAvif = toAvif;
exports.dev = parallel(images, toWebp, toAvif, javascript, dev);