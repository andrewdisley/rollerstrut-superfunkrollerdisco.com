module.exports = function(eleventyConfig) {

  // Copies content of ./src/static to ./dist/
  eleventyConfig.addPassthroughCopy({ 'src/static/': '/' });

  // Watch tailwind.config.js and main.css
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/_assets/styles/main.css');

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: 'dist'
    },
    htmlTemplateEngine: 'njk',
  }
};
