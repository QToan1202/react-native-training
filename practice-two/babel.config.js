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
            '@assets': './assets',
            '@practice-two/features': './libs/features/index.ts',
            '@practice-two/shared': './libs/shared/index.ts',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
