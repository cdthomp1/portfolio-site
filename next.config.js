

const moduleExports = {
     env: {
          mongo_api_key: process.env.MONGO_URI,
     },
     experimental: { esmExternals: true }
};

module.exports = moduleExports
