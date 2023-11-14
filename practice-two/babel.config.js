process.env.TAMAGUI_TARGET = 'native'

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'transform-inline-environment-variables',
        {
          include: ['TAMAGUI_TARGET'],
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
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
