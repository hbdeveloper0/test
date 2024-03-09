// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://gateway.sandbox.kinguin.net',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/esa/api', // Adjust the path as needed
      },
    })
  );
};
