import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './package.json';

// load all plugins in 'devDependencies' into the vairable $
const $ = gulpLoadPlugins({
  pattern: ['*'],
  scope: ['devDependencies'],
});

const { reload } = browserSync.reload;

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

// Clean files for changes & reload
gulp.task('clean', () => del(['dist/*', 'verdor/*']));

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', () => {
  // Bootstrap
  gulp.src(pkg.paths.bootstrap.src).pipe(gulp.dest(pkg.paths.bootstrap.dest));
});

// Scan HTML for asserts & optimize them
gulp.task('html', () => {
  return gulp.src(pkg.paths.src.html)
    .pipe($.useref({
      searchPath: '{.tmp,app}',
      noAssets: true,
    }))
    // Minify any HTML
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true,
    })))
    // Output files
    .pipe($.if('*.html', $.size({ title: 'html', showFiles: true })))
    .pipe(gulp.dest(pkg.paths.dest.html));
});

gulp.task('serve', [], () => {
  browserSync({
    notify: false,
    logPrefix: 'CC32',
    server: pkg.paths.dest.html,
    port: 3000,
  });

  gulp.watch([pkg.paths.src.html], reload);
});

// Build production files, the default task
gulp.task('default', ['clean'], cb =>
  runSequence(
    ['html'],
    'serve',
    cb,
  )
);
