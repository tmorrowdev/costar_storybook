import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#0559b3',
  colorSecondary: '#033871',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Helvetica, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#EC4A08',
  barBg: '#033871',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Costar Components',
  brandUrl: 'https://costargroup.com',
  brandImage: 'https://costar.com/_next/static/images/logo-costar-09522d74ee22277bc21a7f32ec8dbbbe.svg',
});
