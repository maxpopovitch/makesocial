var gulp  = require('gulp'),
    gutil = require('gulp-util'),

    jshint     = require('gulp-jshint'),
    sass       = require('gulp-ruby-sass'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');
    
    input  = {
      'sass': 'template/scss/**/*.scss',
      'javascript': 'temaplate/js/**/*.js'
    },

    output = {
      'stylesheets': 'template/css',
      'javascript': 'template/js'
    };

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch']);

/* run javascript through jshint */
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/* compile scss files */
gulp.task('build-css', function() {
  return gulp.src('template/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.stylesheets));
});

/* concat javascript files, minify if --type production */
gulp.task('build-js', function() {
  gulp.src('bower_components/jquery/dist/jquery.min.js',
           'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js')
    .pipe(gulp.dest('template/js/'));  
  gulp.src(input.javascript)
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.javascript));
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
  gulp.watch(input.javascript, ['jshint', 'build-js']);
  gulp.watch(input.sass, ['build-css']);
});