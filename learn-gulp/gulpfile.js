var gulp=require('gulp');
var browserSync=require('browser-sync');
var uglify=require('gulp-uglify');
// var pump=require('pump');
var cleancss=require('gulp-clean-css');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var filter = require('gulp-filter');
var csso = require('gulp-csso');
var useref=require('gulp-useref');
var inject=require('gulp-inject');
 
// gulp.task('browser-sync',function(){
//     browserSync.init({
//         files:['app/*.*','app/**/*.*','app/**/**/*.*'],
//         server:{
//             baseDir:'app/',
//             index:'index.html'
//         },
//         port:3000
//     })
// });

// var injectFiles = gulp.src([
//     path.join(conf.paths.src, '/sass/**/_*.scss'),
//     '!' + path.join(conf.paths.src, '/sass/theme/conf/**/*.scss'),
//     '!' + path.join(conf.paths.src, '/sass/404.scss'),
//     '!' + path.join(conf.paths.src, '/sass/auth.scss')
//   ], {read: false});

//   var injectOptions = {
//     transform: function (filePath) {
//       filePath = filePath.replace(conf.paths.src + '/sass/', '');
//       return '@import "' + filePath + '";';
//     },
//     starttag: '// injector',
//     endtag: '// endinjector',
//     addRootSlash: false
//   };
// gulp.task('inject',function(){
//     var target=gulp.src('app/css/main.css');
//     var sources=gulp.src(['app/css/bootstrap.min.css'],{read:false});
//     return target.pipe(inject(sources, {
//         transform: function (filePath, file) {
//             // return file contents as string
//             return file.contents
//           },
//         starttag: '/* injector */',
//         endtag: '/* endinjector */',
//         addRootSlash: false
//       })).pipe(gulp.dest('output'));
// })

// gulp.task('script',function (cb) {
//     pump([
//           gulp.src('app/js/*.js'),
//           uglify(),
//           gulp.dest('dist')
//       ],
//       cb
//     );
// })

// gulp.task('minifycss', function(){
//     return gulp.src('app/css/*.css')
//       .pipe(cleancss({compatibility: 'ie8'}))
//       .pipe(gulp.dest('minifycombine'));
// });

gulp.task("default", function() {
    var jsFilter = filter("**/*.js", { restore: true });
    var cssFilter = filter("**/*.css", { restore: true });
    var indexHtmlFilter = filter(['**/*', '!**/index.html'], { restore: true });
   
    return gulp.src("app/index.html")
    .pipe(useref())      // Concatenate with gulp-useref
    .pipe(jsFilter)
    .pipe(uglify())             // Minify any javascript sources
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(csso())               // Minify any CSS sources
    .pipe(cssFilter.restore)
    .pipe(indexHtmlFilter)
    .pipe(rev())                // Rename the concatenated files (but not index.html)
    .pipe(indexHtmlFilter.restore)
    .pipe(revReplace())         // Substitute in new filenames
    .pipe(gulp.dest('public'));
});

// gulp.task("default",function(){
//     return gulp.src('app/*.html')
//         .pipe(useref())
//         .pipe(gulpif('*.js', uglify()))
//         .pipe(gulpif('*.css', minifyCss()))
//         .pipe(gulp.dest('dist'));
// })

