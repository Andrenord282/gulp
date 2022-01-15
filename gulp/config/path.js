// get name of folder project
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// folder src and dist
const buildFolder = `./dist`;
const srcFolder = `./src`;

// object all paths
export const path = {
    src: {
        pug: `${srcFolder}/*.pug`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/*.scss`,
        img: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
        svg: `${srcFolder}/img/icons/*.svg`,
        js: `${srcFolder}/js/app.js`,
        fonts: `${srcFolder}/fonts/`,
        files: `${srcFolder}/files/**/*.*`
    },
    build:{
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        img: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files`
    },
    watch: {
        pug: `${srcFolder}/**/*.pug`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/*.scss`,
        img: `${srcFolder}/img/*.{jpg,jpeg,png,gif,webp}`,
        // svg: `${srcFolder}/img/svg/*.svg`,
        js: `${srcFolder}/js/**/*.js`,
        files:`${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}