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
            '@practice-two/features/*': './libs/features/index.ts',
            '@practice-two/shared/animations': './libs/shared/animations/index.ts',
            '@practice-two/shared/components': './libs/shared/components/index.ts',
            '@practice-two/shared/constants': './libs/shared/constants/index.ts',
            '@practice-two/shared/hocs': './libs/shared/hocs/index.ts',
            '@practice-two/shared/hooks': './libs/shared/hooks/index.ts',
            '@practice-two/shared/services': './libs/shared/services/index.ts',
            '@practice-two/shared/stores': './libs/shared/stores/index.ts',
            '@practice-two/shared/styles': './libs/shared/styles/index.ts',
            '@practice-two/shared/types': './libs/shared/types/index.ts',
            '@practice-two/shared/utils': './libs/shared/utils/index.ts',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
