const GulpClient = require("gulp");
const Plug = require('gulp-load-plugins')();
const bs = require('browser-sync').create();

console.log(Plug);

GulpClient.task('html-dev', () => {
    return GulpClient.src('./src/index.html')
    .pipe(GulpClient.dest('./dist/'));
});

GulpClient.task('css-dev', () => {
    return GulpClient.src('./src/sass/*.scss')
    .pipe(Plug.sass().on('error', Plug.sass.logError))
    .pipe(GulpClient.dest('./dist/css/'))
    .pipe(bs.stream());
});

GulpClient.task('js-dev', () => {
    return GulpClient.src('./src/js/*.js')
            .pipe(GulpClient.dest('./dist/js/'))
            .pipe(bs.stream());
});

GulpClient.task('clean', () => {
    return GulpClient.src("./dist/**/*")
    .pipe(Plug.clean());
});

GulpClient.task('serve', () => {
    bs.init({
        server : './dist'
    });
    GulpClient.watch("src/sass/*.scss", GulpClient.series('css-dev'));
    GulpClient.watch("src/js/*.js", GulpClient.series('js-dev'));
    GulpClient.watch("src/*.html", GulpClient.series('html-dev')).on('change', bs.reload);
});

GulpClient.task('watch', GulpClient.series('css-dev', 'html-dev', 'js-dev', 'serve'));
GulpClient.task('build', GulpClient.parallel('clean', 'css-dev', 'html-dev', 'js-dev'));

GulpClient.task('default', GulpClient.series('watch'));
