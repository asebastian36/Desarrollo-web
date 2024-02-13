//  extraer funcionalidades de las dependencias
const { src, dest, watch } = require('gulp');
const sass =  require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

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

function dev(done) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;