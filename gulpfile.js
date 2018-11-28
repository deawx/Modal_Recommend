var path = require("path");
var fs = require("fs");

var browserify = require("browserify");

var gulp = require("gulp");
var sass = require("gulp-sass");

var sourcemaps = require('gulp-sourcemaps');


gulp.task("build", function() {

	var out = fs.createWriteStream("./dist/js/app.js");

	return browserify({
		entries: ["./dist/js/index.js"]
	})
	.bundle()
	.pipe(out);
});

gulp.task("sass", function() {

	return gulp.src("./custom.scss")
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("./dist/css/"));
});