const debugFilter = require('@jamshop/eleventy-filter-dump');
const htmlmin = require('html-minifier');

module.exports = function (eleventyConfig) {
  // Copies content of ./src/_previous to ./dist/
  eleventyConfig.addPassthroughCopy({ 'src/_previous/': '/' });

  // Copies content of ./src/static to ./dist/
  eleventyConfig.addPassthroughCopy({ 'src/static/': '/' });

  // Watch tailwind.config.js and main.css
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/_assets/styles/main.css');

  // https://github.com/jamshop/eleventy-filter-dump
  eleventyConfig.addFilter('debug', debugFilter);

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        processScripts: ['text/javascript'],
        useShortDoctype: true,
        removeComments: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: 'dist',
    },
    htmlTemplateEngine: 'njk',
  };
};
