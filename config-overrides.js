const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
    ...addBabelPlugins(
        [
            'module-resolver',
            {
                root: ['src', 'images', 'global', 'modules', 'utils', 'store', 'components'],
                alias: {
                    images: './src/assets/images',
                    components: './src/components',
                    utils: './src/utils',
                    store: './src/store',
                    modules: './src/modules',
                },
            },
        ],
    ),
);
