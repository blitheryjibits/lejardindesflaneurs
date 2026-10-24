export default {
  plugins: [
    "removeStyleElement",
    {
      inlineStyles: {
        onlyMatchedOnce: false,
      },
    },
    "convertColors",
    "cleanupIDs",
  ],
};
