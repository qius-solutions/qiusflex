'use strict';

var gulp = require('gulp');
const fs = require("fs");

gulp.task('generate-lib', function () {
    return gulp.src([
        '_sass/lib/**/*',
    ])
        .pipe(gulp.dest('dist/'));
});

gulp.task('generate-readme', function () {
    return gulp.src([
        './README.md',
    ])
        .pipe(gulp.dest('dist/'));
});

gulp.task("generate-package-json", (done) => {
    const packageData = {
        name: "@qius.solutions/qiusflex",
        version: "4.0.5",
        description: "QiusFlex - CSS utilities powered by Qius Solutions",
        repository: {
            type: "git",
            url: "git+https://github.com/qius-solutions/qiusflex.git",
        },
        keywords: [
            "grid",
            "responsive",
            "flex",
            "css utility"
        ],
        author: "Qius Solutions <qius.solutions@gmail.com>",
        license: "MIT",
        bugs: {
            url: "https://github.com/qius-solutions/qiusflex/issues",
        },
        homepage: "https://www.qius-solutions.org/qiusflex"
    };

    if (!fs.existsSync("dist")) {
        fs.mkdirSync("dist", { recursive: true });
    }

    fs.writeFileSync("dist/package.json", JSON.stringify(packageData, null, 2));
    done();
});