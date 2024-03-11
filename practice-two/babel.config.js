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
          root: ['./libs', './apps'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@assets': './assets',
            '@practice-two/features/auth': './libs/features/Authentication/index.ts',
            '@practice-two/features/browse': './libs/features/Browse/index.ts',
            '@practice-two/features/checkout': './libs/features/Checkout/index.ts',
            '@practice-two/features/notification': './libs/features/Notification/index.ts',
            '@practice-two/features/onboarding': './libs/features/Onboarding/index.ts',
            '@practice-two/features/product': './libs/features/Product/index.ts',
            '@practice-two/features/wishlist': './libs/features/Wishlist/index.ts',
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
