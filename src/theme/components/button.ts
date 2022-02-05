import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

const baseStyle = {
  px: 5,
  py: 3,
};

const sizes = {
  full: {
    w: '100%',
  },
};

function defaultVariant(props: Dict): Dict {
  return {
    borderRadius: 'base',
    color: mode('text.light', 'text.dark')(props),
    _hover: {
      opacity: mode('0.75', '0.8')(props),
      transition: 'all 0.2s ease-out',
    },
    _focus: {
      boxShadow: 'none',
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
