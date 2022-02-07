import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

const parts = ['overlay', 'dialogContainer', 'dialog', 'header', 'closeButton', 'body', 'footer'];

const baseStyleOverlay = {
  bgColor: 'modal',
  zIndex: 'overlay',
};

const baseStyleDialogContainer = {
  display: 'flex',
  zIndex: 'modal',
  justifyContent: 'center',
};

function baseStyleDialog(props: Dict): Dict {
  return {
    userSelect: 'none',
    w: 'full',
    maxW: ['70%', '384px'],
    h: '100vh',
    zIndex: 'modal',
    maxH: '100vh',
    bgColor: mode('bodyBg.light', 'bodyBg.dark')(props),
    color: mode('text.light', 'text.dark')(props),
    boxShadow: 'none',
  };
}

const baseStyleHeader = {
  mx: [2, 12],
  mt: 8,
  mb: 4,
  textAlign: 'left',
  fontSize: '1.2em',
  fontWeight: 'bold',
};

const baseStyleCloseButton = {
  position: 'absolute',
  top: 12,
  insetEnd: 12,
  _hover: {
    bgColor: 'transparent',
  },
  _focus: {
    bgColor: 'transparent',
    boxShadow: 'focus',
  },
};

const baseStyleBody = {
  mx: [2, 12],
  fontSize: ['0.85em', '0.95em', '1em'],
  flex: 1,
  overflow: 'auto',
};

function baseStyleFooter(props: Dict): Dict {
  return {
    px: [6, 12],
    py: [4, 8],
    color: mode('heading.light', 'heading.dark')(props),
    bgColor: mode('componentBg.light', 'componentBg.dark')(props),
  };
}
const baseStyle = (props: Dict): Dict => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: baseStyleDialog(props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter(props),
});

const sizes = {
  default: {},
};

const defaultProps = {
  size: 'default',
};

export default {
  parts,
  baseStyle,
  sizes,
  defaultProps,
};
