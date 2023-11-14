module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./app'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './app/components',
            '@screens': './app/screens',
            '@assets': './assets',
            '@constants': './app/constants',
            '@utils': './app/utils',
            '@types': './app/types',
            '@styles': './app/styles',
            '@hooks': './app/hooks',
            '@navigation': './app/navigation',
            '@services': './app/services',
            '@animations': './app/animations',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
