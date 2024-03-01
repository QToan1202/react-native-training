module.exports = {
  stories: [
    '../libs/features/**/**/*.stories.?(ts|tsx|js|jsx)',
    '../libs/shared/**/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
  ],
}
