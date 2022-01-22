module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd35e52030260bbf44f6c81daafcc2a5'),
  },
});
