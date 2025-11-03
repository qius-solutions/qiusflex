'use strict';

var gulp = require('gulp');
const fs = require("fs");

gulp.task('copy-lib', function () {
    return gulp.src([
        '_sass/lib/**/*',
    ])
        .pipe(gulp.dest('dist/'));
});

gulp.task("generate-package", (done) => {
    const packageData = {
        name: "@qius.solutions/qiusflex",
        version: "4.0.3",
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