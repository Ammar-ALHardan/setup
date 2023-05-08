const gulp =require("gulp");
const concat =require("gulp-concat");
const prefix =require("gulp-autoprefixer");
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
// const watch = require('gulp-watch');


//Html task

gulp.task('html', function (){
    return gulp.src('project/css/index.pug')
    .pipe(pug({pretty :true}))
    .pipe(gulp.dest('dist'))
})

//CSS task

gulp.task('css', function () {
    return gulp.src('project/css/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix('last 2 version'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
})



//JS task
gulp.task('scripts', function () {
    return gulp.src('project/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
})

// gulp watch 

gulp.task('watch', function () { 
    require('./server.js');
   gulp.watch('project/index.pug',gulp.series('html')); 
   gulp.watch('project/css/**/*.scss',gulp.series(['css'])); 
})

