process.env.TAMAGUI_TARGET = 'native'

module.exports = function (api) {
  api.cache(true)

  if (
    process.env.NX_TASK_TARGET_TARGET === 'build' ||
    process.env.NX_TASK_TARGET_TARGET.includes('storybook')
  ) {
    return {
      presets: [
        [
          '@nx/react/babel',
          {
            runtime: 'automatic',
          },
        ],
      ],
    }
  }

  return {
    presets: [['module:@react-native/babel-preset', { useTransformReactJSX: true }]],
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
          config: './src/config/tamagui.config.ts',
          logTimings: true,
        },
      ],
    ],
  }
}
