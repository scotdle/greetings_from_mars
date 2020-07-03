const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/global.scss";'
      }
    }
  },

  transpileDependencies: ["vuetify"],
};
