module.exports = {
    port: 8083,
    webpackServerPort: 9083,
    websiteName: 'News',
    numPostsToShow: 25,
    supportedAgeWords: ['day', 'week', 'month', 'year', 'alltime'],
    postPollInterval: 4000,
    optimization: {
        splitChunks: {
          chunks: "all"
        }
    }
};
