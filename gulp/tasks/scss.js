import dartSaas from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import webpConverter from 'webp-converter';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';


const sass = gulpSass(dartSaas);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
            type: 'SCSS',
            massenge: 'Error: <%= error.message %>'
        })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass(
            {outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpCLass: '.webp',
            noWebpClass: '.no-webp'
        }))
        .pipe(autoprefixer({
            grid: true,
            cascade: true,
            overrideBrowserslist: ['last 3 versions']
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(app.plugins.rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())

}

