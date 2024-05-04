import { THEME_COLOR_DARK, THEME_COLOR_LIGHT } from './src/constants/theme';

/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Rubik', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#E5F1FF',
          100: '#CCE4FF',
          200: '#9ECBFF',
          300: '#6BB0FF',
          400: '#3895FF',
          500: '#097BFF',
          600: '#0062D1',
          700: '#004A9E',
          800: '#00326B',
          900: '#001833',
          950: '#000C19',
        },
        dark: THEME_COLOR_DARK,
        light: THEME_COLOR_LIGHT,
      },
      textShadow: {
        none: 'none',
        DEFAULT: '0 0.0625rem 0.125rem var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: any;
      theme: any;
    }) {
      matchUtilities(
        {
          'text-shadow': (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
