const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/guess',
    createProxyMiddleware({
      target: 'https://peaceful-lowlands-56285.herokuapp.com/',
      changeOrigin: true,
    })
  );
};
