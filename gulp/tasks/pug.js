import pug from 'gulp-pug';
import webp from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

export const html = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
            type: 'HTML',
            massenge: 'Error: <%= error.message %>'
        })))
        .pipe(app.plugins.replace(/@img\//g, './img/'))
        .pipe(app.plugins.if(app.isDev,pug({pretty: true})))
        .pipe(app.plugins.if(app.isBuild,pug({pretty: false})))
        .pipe(webp())
        .pipe(app.plugins.if(app.isBuild, versionNumber({
            'value': '%DT%',
            'append': {
                'key': '_v',
                'cover': 0,
                'to':[
                    'css',
                ]
            },
            'output':{
                'file': 'gulp/version.json'
            }
        })))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}

// плагин сиэсс


