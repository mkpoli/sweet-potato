const baseStyle = {
  w: '100%',
  pt: '120px',
  maxW: { base: '1024px', xl: '1120px', '2xl': '1280px', '3xl': '55%' },
};

const variants = {
  default: {},
  dashboard: { minH: '100vh', maxW: 'full', pt: { base: 8, xl: '100px' } },
  cover: {
    p: { base: 8, xl: 0 },
  },
};

const defaultProps = {
  variant: 'default',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
