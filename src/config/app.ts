export const {
  NODE_ENV = 'development',

  APP_PORT = 3000,
  APP_HOSTNAME = 'localhost',
  APP_PROTOCOL = 'http',

  APP_SECRET = 'asfhbogfhyzioern46h4r9thxfgb41n46h4r5fez9ab5n4s64q7ss3g5fez9ab5n4s64q7s99thxfgb41s3g87sd68gfb1gt79etu7j989hg84668j7ut97h6f98f74q6sdv4qs6fr84h7q96d87g',
} = process.env;

export const APP_ORIGIN = `${APP_PROTOCOL}://${APP_HOSTNAME}:${APP_PORT}`;

export const IN_PROD = NODE_ENV === 'production';
