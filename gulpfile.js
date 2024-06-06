import gulp from 'gulp'
import imagemin from 'gulp-imagemin'

function images() {
	return gulp.src('src/img/**/*.{jpg,png}').pipe(gulp.dest('dist/img'))
}

export { images }
