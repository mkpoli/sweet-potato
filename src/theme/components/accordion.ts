import { accordionAnatomy as parts } from '@chakra-ui/anatomy';
import type { PartsStyleObject, SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyleContainer: SystemStyleObject = {
  border: 'none',
};

const baseStyleButton: SystemStyleObject = {
  transitionProperty: 'common',
  transitionDuration: 'normal',
  borderRadius: 'base',
  fontSize: '1rem',
  fontWeight: '600',
  border: '2px',
  borderColor: 'transparent',
  _focus: {
    boxShadow: 'none',
    borderColor: 'potato',
  },
  _hover: {
    bg: 'componentBg.light',
    transform: 'translate(0, 3px)',
    transitionDuration: '0.1s',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  px: 4,
  py: 2,
  my: 4,
};

const baseStylePanel: SystemStyleObject = {
  pt: 2,
  px: 4,
  pb: 5,
};

const baseStyleIcon: SystemStyleObject = {
  fontSize: '1.25em',
};

const baseStyle: PartsStyleObject<typeof parts> = {
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon,
};

export default {
  parts: parts.keys,
  baseStyle,
};
