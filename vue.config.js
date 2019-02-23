module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/~st201416900/" : "/",
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
