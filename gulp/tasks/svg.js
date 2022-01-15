import svgSprite  from'gulp-svg-sprite';


export const svg  = () => {
   return app.gulp.src(app.path.src.svg)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
        type: 'SVG',
        massenge: 'Error: <%= error.message %>'
    })))
    .pipe(svgSprite({
        shape: {
            dimension: { // Set maximum dimensions
              maxWidth: 50,
              maxHeight: 50
            }
        },
        mode: {
            stack: { 
              sprite: `../icons/icons.svg`,
              example: true
            }
          }
    }))
    .pipe(app.gulp.dest(app.path.build.img))
}

