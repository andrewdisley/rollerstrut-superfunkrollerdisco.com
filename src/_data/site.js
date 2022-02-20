module.exports = {
  nodeEnv: process.env.NODE_ENV,
  eleventyEnv: process.env.ELEVENTY_ENV,
  shortname: process.env.npm_package_config_shortname,
  title: process.env.npm_package_config_title,
  meta: {
    noIndex: true,
  },
};
