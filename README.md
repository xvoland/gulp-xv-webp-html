# gulp-xv-webp-html.js
GULP extension for support WEBP images and replace original image tag in HTML

in other words: replace `<img>` to `<picture>` for supports webp

**Support file extensions:**  `.jpg, .png, .gif, .jpeg, .avif, .svg, .tiff`

Package home page: https://www.npmjs.com/package/gulp-xv-webp-html



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
    <img class="lazyload" src="images/main.jpg" width="100" height="100">
</picture>
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




## Donation & Sponsors

Donate any amount for my projects <a href='https://paypal.me/xvoland'>https://paypal.me/xvoland</a>


You are more than welcome to donate me some beer money :)

<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9D4YBRWH8QURU'><img alt='Click here to lend your support to Extractor and make a donation!' src='https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif' border='0' /></a>




## License

Author [Vitalii Tereshchuk](https://dotoca.net). &copy; 2021, MIT license.
Or welcome to my <a href='https://www.youtube.com/user/xVoLAnD'>YouTube channel</a>