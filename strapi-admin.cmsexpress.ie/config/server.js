module.exports = ({ env }) => ({
  host: env('HOST', 'admin.cmsexpress.ie'),
  port: env.int('PORT', 1337),
  production: true,
  proxy: {
    "enabled": false
  },
  
});
