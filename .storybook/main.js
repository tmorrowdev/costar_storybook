module.exports = {
  stories: ['../src/**/*.stories.ts','../src/app/shared/**/*.stories.ts'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-jest',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
  ]
};
