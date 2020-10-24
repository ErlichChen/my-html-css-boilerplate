// import gulp from 'gulp';
// import runSequence from 'run-sequence';
// import browserSync from 'browser-sync';
// import gulpLoadPlugins from 'gulp-load-plugins';
// import pkg from './package.json';

import { series } from 'gulp';
import del from 'del';

// Clean files for changes & reload
gulp.task('clean', () => del(['dist/*']));

