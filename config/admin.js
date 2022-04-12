module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '97b664ecc261c64397042de11df592f6'),
  },
});
