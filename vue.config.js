const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 4000,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/color.scss";
          @import "@/assets/scss/mixins.scss";
          @import "@/assets/scss/responsive.scss";
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
});
