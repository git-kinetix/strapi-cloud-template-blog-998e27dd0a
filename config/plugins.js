module.exports = () => ({
  upload: {
    enabled: true,
    config: {
      providerOptions: {
        localServer: {
          // 30 days
          maxage: 30 * 24 * 60 * 60 * 1000,
        },
      },
    },
  },
});