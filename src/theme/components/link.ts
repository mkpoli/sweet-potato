import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

const baseStyle = {
  _hover: {
    textDecoration: 'none',
  },
};

const sizes = {
  default: {},
};

function defaultVariant(props: Dict): Dict {
  return {
    borderRadius: 'base',
    color: mode('text.light', 'text.dark')(props),
    _hover: {
      transform: 'scale(1.05,1.05)',
      bgColor: 'transparent',
    },
    _focus: {
      transform: 'scale(1.05,1.05)',
      border: '2px',
      borderColor: 'pink',
      boxShadow: 'none',
      bgColor: 'transparent',
    },
  };
}

const variants = {
  default: defaultVariant,
};

const defaultProps = {
  variant: 'default',
  size: 'default',
};

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
