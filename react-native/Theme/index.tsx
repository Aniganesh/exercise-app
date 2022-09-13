import {Theme} from 'react-native-paper/lib/typescript/types';
import {DefaultTheme} from 'react-native-paper';

// Colors
export const colorPrimary = '#1990d5';
export const colorBackground = '#ffffff';
export const colorSelection = '#a3d3ee';
export const colorText = '#000000';

// Themes
export const textInputTheme = {
  colors: {
    primary: colorPrimary,
    text: colorText,
    background: colorBackground,
    placeholder: colorPrimary,
  },
};

export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colorPrimary,
    text: colorText,
    background: '#ffffff',
  },
};
