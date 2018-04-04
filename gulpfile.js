
// package
const pkg = require('./package.json');

// gulp
const gulp = require('gulp');

const browserSync = require('browser-sync').create();

// load all plugins in 'devDependencies' into the vairable $
const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies'],
});

// const onError = (err) => {
//   console.log(err);
// };

// Set the banner content
const banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2018 -' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  '',
].join('');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', () => {
  // Bootstrap
  gulp.src(pkg.paths.bootstrap.src).pipe(gulp.dest(pkg.paths.bootstrap.dest));
});
