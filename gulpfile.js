const { task, src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

task('sass', () => {
     //cuerpo de la funcion -> pipe es lo ejecuta cada tarea
    // definimos origen de los archivos
    return src('./scss/app.scss')
            .pipe(autoprefixer({
                overrideBrowserslist:['last 2 versions'],
                cascade: false
            }))
            .pipe(sass({
                includePaths:['scss'] //nombre de la carpeta
            }))
            .pipe(dest('css')) // destino donde se guarda el archivo compilado de sass a css
});

// Esta tarea esta mirando siempre cuando se hagan cambios en el archivo .sass para compilarlos
task('watch-sass', () => {
    return watch('scss/*.scss', series('sass'))
});