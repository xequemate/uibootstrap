// bundle this with package.json.default
var gulp         = require('gulp'),
    notify       = require('gulp-notify');

gulp.task('copy-admin-lte-build', function () {
    return gulp.src('AdminLTE/build/less/**/*')
        .pipe(gulp.dest('resources/build/adminlte/less'))
        .pipe(notify({ message: 'copy-admin-lte-build task complete' }));
});

gulp.task('copy-admin-lte-dist', function () {
    return gulp.src('AdminLTE/dist/**/*')
        .pipe(gulp.dest('resources/dist/adminlte'))
        .pipe(notify({ message: 'copy-admin-lte-dist task complete' }));
});

gulp.task('copy-bootstrap-build', function () {
    return gulp.src('AdminLTE/build/bootstrap-less/**/*')
        .pipe(gulp.dest('resources/build/bootstrap/less'))
        .pipe(notify({ message: 'copy-bootstrap-build task complete' }));
});

gulp.task('copy-bootstrap-dist', function () {
    return gulp.src('AdminLTE/bootstrap/**/*')
        .pipe(gulp.dest('resources/dist/bootstrap'))
        .pipe(notify({ message: 'copy-bootstrap-dist task complete' }));
});

gulp.task('copy-admin-lte-plugins', function () {
    return gulp.src('AdminLTE/plugins/**/*')
        .pipe(gulp.dest('resources/plugins'))
        .pipe(notify({ message: 'copy-admin-lte-plugins task complete' }));
});

gulp.task('copy-primeui-dist', function () {
    return gulp.src('primeui/src/main/webapp/primeui/**/*')
        .pipe(gulp.dest('resources/dist/primeui'))
        .pipe(notify({ message: 'copy-primeui-dist task complete' }));
});

gulp.task('default', ['copy-admin-lte-build', 'copy-admin-lte-dist', 'copy-admin-lte-plugins', 'copy-primeui-dist', 'copy-bootstrap-build', 'copy-bootstrap-dist']);