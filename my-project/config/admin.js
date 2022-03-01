module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e4858ba69a9654dc42f96d060187d0c8'),
  },
});
