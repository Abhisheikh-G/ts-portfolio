const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const securityHeaders = [
  {
    key: 'script-src',
    value: 'https://hcaptcha.com, https://*.hcaptcha.com',
  },
  {
    key: 'frame-src',
    value: 'https://hcaptcha.com, https://*.hcaptcha.com',
  },
  {
    key: 'style-src',
    value: 'https://hcaptcha.com, https://*.hcaptcha.com',
  },
  {
    key: 'connect-src',
    value: 'https://hcaptcha.com, https://*.hcaptcha.com',
  },
  {
    key: 'Cache-Control',
    value: 'public, max-age=31536000',
  },
];

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
});
