import type { StorybookConfig } from '@storybook/react-vite'

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { mergeConfig } from 'vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

const tamaguiConfig = {
  components: ['tamagui'],
  config: '../../config/src/lib/tamagui.config.ts',
}

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [tamaguiPlugin(tamaguiConfig), nxViteTsPaths()],
    }),
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
