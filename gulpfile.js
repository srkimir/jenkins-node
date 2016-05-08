'use strict'

const gulp = require('gulp')
const standard = require('gulp-standard')
const mocha = require('gulp-mocha')
const istanbul = require('gulp-istanbul')
const plumber = require('gulp-plumber')

gulp.task('test', function () {
  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({
      reporter: 'spec',
      bail: true,
      timeout: 25000
    }))
    .on('error', function (err) {
      console.error(err)
      process.exit(1)
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      process.exit()
    })
})

gulp.task('default', ['test'])
