/// <reference types="vite-plugin-svgr/client" />

import type { StorybookConfig } from '@storybook/react-vite'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { mergeConfig } from 'vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import svgr from 'vite-plugin-svgr'

const config: StorybookConfig = {
  stories: ['../src/screens/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-remix-react-router'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        nxViteTsPaths(),
        svgr({
          include: '**/*.svg?react',
        }),
        tamaguiPlugin({
          components: ['tamagui'],
          config: '../src/tamagui.config.ts',
        }),
      ],
    }),
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
