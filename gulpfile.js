var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var babel = require('gulp-babel');

var source = 'src';
var destination = 'public';

gulp.task('watch', function(){
	gulp.watch(source + '/scss/**/*.scss', ['scss'])
	gulp.watch(source + '/sass/**/*.sass', ['sass'])
	gulp.watch(source + '/views/partials/*.pug', ['pug'])
	gulp.watch(source + '/js/**/*.js', ['babel'])
});

gulp.task('scss', function(){
	return gulp.src(source + '/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest(destination + '/css'))
});

gulp.task('sass', function(){
	return gulp.src(source + '/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest(destination + '/css'))
});

gulp.task('pug', function(){
	return gulp.src(source + '/views/partials/*.pug')
		.pipe(pug({
			
		}))
		.pipe(gulp.dest(destination + '/html'))
});

gulp.task( 'babel', function(){
	gulp.src(source + '/js/**/*.js')
		.pipe( babel({
			presets: ['env']
		} ))
		.pipe(gulp.dest( destination + '/js' ))
} );