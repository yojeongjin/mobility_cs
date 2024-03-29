const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://223.130.140.159:3000', // 우회할 API 주소(서버 주소)
      changeOrigin: true, // 대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분이다.
    }),
  );
};
