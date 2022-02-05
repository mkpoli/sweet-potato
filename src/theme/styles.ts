import { Styles, GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      fontSize: '16px',
      lineHeight: 'base',
      fontWeight: 'normal',
      color: mode('text.light', 'text.dark')(props),
      bgColor: mode('bodyBg.light', 'bodyBg.dark')(props),
    },
  }),
};

export default styles;
