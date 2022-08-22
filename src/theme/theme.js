import { DarkTheme } from '@react-navigation/native';
import { colors } from './colors';


export const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primaryRed,
    background: colors.darkModeBackground,
    border: colors.border,
  },
}