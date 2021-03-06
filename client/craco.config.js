const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@utils": resolvePath("./src/utils"),
      "@api": resolvePath("./src/api"),
      "@data": resolvePath("./src/data"),
      "@hooks": resolvePath("./src/hooks"),
    },
  },
};
