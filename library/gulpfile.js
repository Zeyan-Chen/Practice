var gulp = require('gulp'),             // 載入 gulp
    gulpSass = require('gulp-sass');    // 載入 gulp-sass

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', ['styles']);
});

gulp.task('styles', function () {
    gulp.src('sass/**/*.sass')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass())         // 編譯 Scss
        .pipe(gulp.dest('css'));  // 指定編譯後的 css 檔案目錄
});