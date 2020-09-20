const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            images: path.resolve(__dirname, './src/assets/images'),
            components: path.resolve(__dirname, './src/components'),
            modules: path.resolve(__dirname, './src/modules'),
            utils: path.resolve(__dirname, './src/utils'),
            store: path.resolve(__dirname, './src/store'),
        },
    },
};
