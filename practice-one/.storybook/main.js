module.exports = {
  stories: [
    '../app/components/**/*.stories.?(ts|tsx|js|jsx)',
    '../app/navigation/**/*.stories.?(ts|tsx|js|jsx)',
    '../app/screens/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
  ],
}
