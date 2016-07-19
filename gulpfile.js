const gulp = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('clean',del.bind(null,['dist']));

gulp.task('style',() => {
	return gulp.src('src/css/*.css')
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({stream:true}));
});

gulp.task('script',() => {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({stream:true}));
});

gulp.task('html',() => {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(reload({stream:true}));
});

gulp.task('build',['style','script','html'],() => {
	return gulp.src('dist/**/*')
		.pipe($.size({title:'build',gzip:true}));
});

gulp.task('serve',() => {
	browserSync({
		notify: false,
		port: 9000,
		server: {
			baseDir:['dist']
		}
	});

	gulp.watch('src/*.html',['html']);
	gulp.watch('src/css/**/*.css',['style']);
	gulp.watch('src/js/**/*.js',['script']);
});

gulp.task('default',['clean'],() => {
	gulp.start('build');
})
