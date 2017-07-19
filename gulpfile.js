var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('watch', function(){
	gulp.watch('app/static/scss/**/*.scss', ['sass'])
});

gulp.task('sass', function(){
	return gulp.src('app/static/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/static/css'))
});

gulp.task('pug', function(){
	return gulp.src('app/views/index.pug')
		.pipe(pug({
			
		}))
		.pipe(gulp.dest(''))
});