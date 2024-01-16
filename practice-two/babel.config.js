module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: [
      [
        'transform-inline-environment-variables',
        {
          include: Object.keys(process.env),
        },
      ],
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
        },
      ],
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
            '@stores': './app/stores',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
