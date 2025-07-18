# gulp-xv-webp-html.js
GULP extension for support WEBP images and replace original image tag in HTML

in other words: replace `<img>` to `<picture>` for supports webp

**Support file extensions:**  `.jpg, .png, .gif, .jpeg, .avif, .svg, .tiff`

[NPM package home page][npm]

**This NodeJS package is a nice addition to my [HTML-template](https://github.com/xvoland/gulp-xv-HTML-Template) with live update and support SCSS.**

*P.S.: I wrote this npm-package because others similar had errors and sometimes didn't work correctly with the input data.*

## Output Example

#### Example #1
```html
// Input
<img class="lazyload" src="/images/Image.jpg" width="100" height="100">
```

```html
// Output
<picture>
    <source srcset="/images/Image.webp" type="image/webp">
    <source srcset="/images/Image.jpg" type="image/jpeg">
    <img class="lazyload" src="images/Image.jpg" width="100" height="100">
</picture>
```

#### Example #2
```html
// Input
<img src="/images/Image.svg" width="100" height="100">
```

```html
// Output
<picture>
    <source srcset="images/Image.webp" type="image/webp">
    <source srcset="images/Image.svg" type="image/svg+xml">
    <img src="images/Image.svg" width="100" height="100">
</picture>
```



Also, more practical of use you can find in my other project [Gulp-xv-HTML-Template](https://github.com/xvoland/gulp-xv-HTML-Template)

## Install

```bash
npm i --save-dev gulp-xv-webp-html
```


## Usage

Given a `package.json` file that has some dependencies within:

```json
{
  "dependencies": {
    "plugin-error": "^1.0.0",
    "through2": "^4.0.2"
  }
}
```

Adding this into your `Gulpfile.js`:
```javascript
const gulp = require('gulp')
const webpHTML = require("gulp-xv-webp-html")
```

#### Example #1

```javascript
var webpHTML = require('gulp-xv-webp-html');

function html() {
    return  src('./source/*.html')
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

#### Example #3
```javascript
var webpHTML = require('gulp-xv-webp-html');

gulp.task("webpHTML", function(){
    return gulp.src(['./sourceHTML/**/*.html'])
           .pipe(webpHTML(['.jpg', '.svg']))
           .pipe(gulp.dest('./destHTML/'))})
```



## Visualization of npm dependency

![Default view](https://github.com/xvoland/gulp-xv-webp-html/raw/main/images/gulp-xv-webp-html.png)


Follow link for live view: [View live 2D map](https://npm.anvaka.com/#/view/2d/gulp-xv-webp-html)

## Liked it?
Hope you liked this project, don't forget to give it a star ⭐.

## Donation & Sponsors

I’ll continue to work and improve the script features regardless of the outcome of funding, because it's rewarding to see that people are using it and it does the job for them. Still I would appreciate your support in covering some of the expenses with the domain hosting and programming hours which are taken from my family time.

[Donate any amount for my projects][paypal]


<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9D4YBRWH8QURU'><img alt='Click here to lend your support to Extractor and make a donation!' src='https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif' border='0' /></a>
---
![GitHub stats](https://github-readme-stats.vercel.app/api?username=xvoland&show_icons=true&theme=radical&hide_border=true)


## Other

📺 Latest my YouTube Videos
<!-- YOUTUBE:START -->
- [Any photo into STUNNING art in 5 seconds #tutorial #oldphotofix #4kart](https://www.youtube.com/shorts/CCYGcLL1cq8)
- [Any Photo Into Stunning Art | High-Resolution Ghibli &amp; Cinematic Style](https://www.youtube.com/watch?v=1T2eQ3pvSLk)
- [2025 Fix Blurry Old Photos in 5 Seconds with AI &lpar;Free!&rpar; | Tutorial](https://www.youtube.com/watch?v=HdXzf8ucUzA)
- [Photo Restoration: Free AI Tool Transform Your Old Photos - Instantly!](https://www.youtube.com/watch?v=-hV9mBcCvro)
- [Stepan Andriyovych Bandera | AI Animation](https://www.youtube.com/shorts/dXi-ZVlqrZI)
<!-- YOUTUBE:END -->

➡️ [more videos...][youtube]

## License

Author [Vitalii Tereshchuk][home]. &copy; 2021, MIT license.
Or welcome to my [YouTube channel][youtube]

[home]: http://dotoca.net
[npm]: https://www.npmjs.com/package/gulp-xv-webp-html
[paypal]: https://paypal.me/xvoland
[youtube]: https://youtube.com/xvoland
[instagram]: https://www.instagram.com/xvoland/
[hosting]: https://goo.gl/3KpxQI
[opencollective]: https://opencollective.com/extract/backers/0/website