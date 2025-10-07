module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
  name: 'strapi::security',
  config: {
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false, // disable CORP
  },
},
  {
    name: 'strapi::cors',
    config: {
      origin: '*',
      headers: '*',
      methods: ['GET', 'HEAD', 'OPTIONS'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
