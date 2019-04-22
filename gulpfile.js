var gulp = require('gulp');
// var sass = require('gulp-sass');


//html
gulp.task("copy-html",function () {
    return gulp.src('*.html')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\adidas\\AdidasWeb'));
});


//img
gulp.task('copy-img',function(){
    return gulp.src('img/*.{jpg,png,tmp,gif}')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\adidas\\AdidasWeb\\img'));
});


//css
gulp.task('copy-css',function(){
    return gulp.src('css/*.css')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\adidas\\AdidasWeb\\css'));
});

//scss
// gulp.task('copy-scss', function(){
//     return gulp.src('scss/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('D:\\phpStudy\\WWW\\adidas\\AdidasWeb\\scss'));
// });


//js
gulp.task('copy-js',function(){
    return gulp.src('js/*.js')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\adidas\\AdidasWeb\\js'));
});



//php
gulp.task('copy-php',function(){
    return gulp.src('php/*.php')
    .pipe(gulp.dest('D:\\phpStudy\\WWW\\adidas\\AdidasWeb\\php'));
});



gulp.task('default',gulp.parallel('copy-html','copy-img','copy-js','copy-css','copy-php'));//???ִ?
gulp.task("watchall",function(){
    //???????????б仯???????仯??????????copy
    gulp.watch("*.html",gulp.series("copy-html"));
    gulp.watch('img/*.{jpg,png,tmp,gif}',gulp.series("copy-img"));
    gulp.watch('js/*.js',gulp.series("copy-js"));
    gulp.watch('css/*.css',gulp.series("copy-css"));
    gulp.watch('php/*.php',gulp.series("copy-php"));
});
