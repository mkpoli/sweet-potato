import React from 'react';
import { Image } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Image
      pb="1px"
      mr={8}
      src="/logo.png"
      fallbackSrc="https://firebasestorage.googleapis.com/v0/b/sonolus-uploader.appspot.com/o/logo.png?alt=media&token=f89fdd25-183e-4530-b2f4-6b00e1ca52b7"
      w={['8em', '10em']}
      alt="Sweet Potato"
      pointerEvents="none"
    />
  );
};

export default Logo;
