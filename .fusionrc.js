/* eslint-env node */

const path = require('path');
const SimpleProgressPlugin = require('simple-progress-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  babel: {
    exclude: moduleName =>
      /node_modules/.test(moduleName) && !/fusion-cli\//.test(moduleName),
  },

  overrideWebpackConfig: webpackConfig => {
    webpackConfig.devtool = 'source-map';

    // Anonymize the source-mapped file paths
    webpackConfig.output.devtoolModuleFilenameTemplate = info => {
      let modulePath = path.isAbsolute(info.absoluteResourcePath)
        ? info.absoluteResourcePath
        : path.join(__dirname, info.absoluteResourcePath);

      modulePath = modulePath.replace(
        __dirname
          .split('/')
          .slice(0, -1)
          .join('/'),
        '/'
      );

      return modulePath;
    };

    // Tweak the progress output for better production build performance evaluation
    webpackConfig.plugins = webpackConfig.plugins.map(plugin => {
      if (plugin.constructor.name === 'ProgressPlugin') {
        return new SimpleProgressPlugin({
          format: webpackConfig.mode === 'production' ? 'extended' : 'compact',
        });
      }

      return plugin;
    });

    webpackConfig.resolve.plugins = [new TsconfigPathsPlugin()];
    webpackConfig.resolve.extensions = [
      '.wasm',
      '.js',
      '.mjs',
      '.json',
      '.ts',
      '.tsx',
    ];

    webpackConfig.module.rules.push({
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    });

    if (webpackConfig.externals && webpackConfig.externals[0]) {
      // Include aliased modules in server bundle
      const originalExternalsResolver = webpackConfig.externals[0];
      webpackConfig.externals[0] = (context, request, callback) => {
        if (/src\//.test(request)) return callback();
        return originalExternalsResolver(context, request, callback);
      };
    }

    return webpackConfig;
  },
};
