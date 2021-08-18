"use strict";
/* gulp-xv-webp-html */
/*!
* index.js
*
* © Copyright 2021, Vitalii Tereshchuk https://dotoca.net
* Released under the MIT license
* Github: https://github.com/xvoland/gulp-xv-webp-html.git
*
* Date: May 30, 2021
*/

const pluginName = 'gulp-xv-webp-html'

const gutil = require('gulp-util')
const PluginError = gutil.PluginError

const through = require('through2')


module.exports = function (extensions) {
    // support extensions in lower/upper case
    var extensions = extensions || ['.jpg', '.png', '.gif', '.jpeg','.avif', '.svg', '.tif']
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file)
            return
        }

        if (file.isStream()) {
            cb(new PluginError(pluginName, 'Streaming not supported'))
            return
        }

        try {
            var inPicture = false

            const data = file.contents
                .toString()
                .split('\n')
                .map(function (line) {
                    /* inside/outside of tag <picture> ? */
                    if (line.indexOf('<picture') + 1) inPicture = true
                    if (line.indexOf('</picture') + 1) inPicture = false

                    /* check image tag <img> */
                    if (line.indexOf('<img') + 1 && !inPicture) {
                        /* extract each image src */
                        var Re =  /<img([^>]+)src=[\"\'](\S+)[\"\']([^>\/]+)\/?>/gi
                        var regexpArray = Re.exec(line)
                        var imgTag = regexpArray[0]     // orig image tag
                        var srcImage = regexpArray[2]   // src URL
                        var newWebpUrl = srcImage       // for new URL

                        /* exit if in URL .webp */
                        if (srcImage.indexOf('.webp') + 1) return line

                        extensions.forEach(ext => {
                            // console.log( '---> SRC: ' + ext + ' ' + srcImage + ' ' + srcImage.indexOf(ext) )

                            if ( srcImage.indexOf(ext) == -1 ) {
                                // doesn't require replacement
                                return line;

                            } else {
                                /* replace all occurrences of the extensions */
                                // console.log(newWebpUrl + ' <---REPLACE');
                                newWebpUrl = newWebpUrl.replace(ext, '.webp')

                                /* create output HTML with tag <picture> */
                                switch (ext) {
                                    case '.jpg':
                                        line = '<picture>'+
                                                    '<source srcset="' + newWebpUrl + '" type="image/webp">' +
                                                    '<source srcset="' + srcImage + '" type="image/jpeg">' +
                                                    imgTag +
                                            '</picture>'
                                        break;

                                    case '.png':
                                        line = '<picture>'+
                                                    '<source srcset="' + newWebpUrl + '" type="image/webp">' +
                                                    '<source srcset="' + srcImage + '">' +
                                                    imgTag +
                                                '</picture>'
                                        break;
    

                                    case '.svg':
                                        line = '<picture>'+
                                                    '<source srcset="' + newWebpUrl + '" type="image/webp">' +
                                                    '<source srcset="' + srcImage + '" type="image/svg+xml">' +
                                                    imgTag +
                                                '</picture>'
                                        break;

                                    case '.avif':
                                        line = '<picture>'+
                                                    '<source srcset="' + srcImage + '" type="image/avif">' +
                                                    '<source srcset="' + newWebpUrl + '" type="image/webp">' +
                                                    imgTag +
                                            '</picture>'
                                        break;

                                    case '.gif':
                                        line = '<picture>'+
                                                    '<source srcset="' + srcImage + '" media="(prefers-reduced-motion: reduce)">' +
                                                    imgTag +
                                                '</picture>'
                                        break;

                                    case '.tif':
                                        line = '<picture>'+
                                                    '<source srcset="' + srcImage + '" type="image/tiff">' +
                                                    '<source srcset="' + newWebpUrl + '" type="image/webp">' +
                                                    imgTag +
                                            '</picture>'
                                        break;
    
                                    default:
                                        line = '<picture>'+
                                                    '<source srcset="' + newWebpUrl + '" type="image/webp">' +
                                                    '<source srcset="' + srcImage + '" type="image/jpeg">' +
                                                    imgTag +
                                            '</picture>'
                                }
                            }
                        }); 

                        return line
                    }
                    return line
                })
                .join('\n')

            file.contents = new Buffer.from(data)

            this.push(file)
        } catch (err) {
            this.emit('error', new PluginError(pluginName, err))
        }

        cb()
    })
}
