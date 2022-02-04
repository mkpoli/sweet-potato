import { extendTheme } from '@chakra-ui/react';
import { ThemeDirection } from '@chakra-ui/theme';
import { ColorModeOptions } from '@chakra-ui/system';
import styles from './styles';
import foundations from './foundations';
import components from './components';

const direction: ThemeDirection = 'ltr';

const config: ColorModeOptions = {
  useSystemColorMode: true,
  initialColorMode: 'light',
};

const overrides = {
  config,
  styles,
  direction,
  ...foundations,
  components,
};

export default extendTheme(overrides);
