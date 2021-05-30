# gulp-xv-webp-html.js
GULP extension for support WEBP images and replace original image tag in HTML

in other words: replace `<img>` to `<picture>` for supports webp

**Support file extensions:**  `.jpg, .png, .gif, .jpeg, .avif, .svg, .tiff`

## Output Example

```html
// Input
<img class="lazyload" src="/images/Image.jpg" width="100" height="100">
```

```html
// Output
<picture>
    <source srcset="/images/Image.webp" type="image/webp">
    <source srcset="/images/Image.jpg" type="image/jpeg">
    <img class="lazyload" src="images/main.jpg" width="100" height="100"></picture>
```


## Install

```bash
npm
npm i --save-dev gulp-xv-webp-html
```

## Usage
#### Example #1
```javascript
var webpHTML = require('gulp-xv-webp-html');

function html() {
    return  src('./source/')
            .pipe(webpHTML())
            .pipe(gulp.dest('./destHTML/'))
});

exports.html = html;
```

#### Example #2
```javascript
var webpHTML = require('gulp-xv-webp-html');

gulp.task("webpHTML", function(){
    return gulp.src(['./sourceHTML/**/*.html'])
           .pipe(webpHTML())
           .pipe(gulp.dest('./destHTML/'))})
```