const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};
