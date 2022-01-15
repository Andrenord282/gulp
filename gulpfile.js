/*
1.
2.
3.
4.
5.

*/


// generals modules
import gulp from 'gulp';
import { plugins } from './gulp/config/plugins.js';

// import all path
import { path } from './gulp/config/path.js';



// import tasks
import { clean } from './gulp/tasks/clean.js';
import { copy } from './gulp/tasks/copy.js'
import { server } from './gulp/tasks/server.js';

import { html } from './gulp/tasks/pug.js';
import { scss } from './gulp/tasks/scss.js';
import { img } from './gulp/tasks/img.js';
import { svg } from './gulp/tasks/svg.js'
import { js } from './gulp/tasks/js.js';
import { otfToTtf, ttfToWoff, fontsStyle} from './gulp/tasks/fonts.js'




global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp: gulp,
    plugins: plugins,
    path: path
}



const watcher = () =>{
    gulp.watch(app.path.watch.files, copy)
    gulp.watch(app.path.watch.pug, html)
    gulp.watch(app.path.watch.scss, scss)
    gulp.watch(app.path.watch.img, img)
    gulp.watch(app.path.watch.js, js)
}

const fontsTask = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const setTasks = gulp.parallel(copy, html, scss, js, img, svg)
const watcherServer = gulp.parallel(watcher, server)

const dev = gulp.series(clean, fontsTask, setTasks, watcherServer);
const build = gulp.series(clean, setTasks);

export { svg } 
export { dev } 
export { build } 


// gulp.task('default', gulpDev);