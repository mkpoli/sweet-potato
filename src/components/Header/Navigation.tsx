import React from 'react';
import { Flex } from '@chakra-ui/react';

import Logo from './Logo';

const HeaderNav: React.FC = () => {
  return (
    <Flex>
      <Logo />
    </Flex>
  );
};

export default HeaderNav;
