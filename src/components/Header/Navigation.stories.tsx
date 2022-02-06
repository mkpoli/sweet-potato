import React from 'react';
import HeaderNav from './Navigation';
import { Flex } from '@chakra-ui/react';

export default { title: 'Header/Navigation' };

export const defaultStyle = (): JSX.Element => (
  <Flex px={2} align="center" height="300px" bgColor="componentBg.light">
    <HeaderNav />
  </Flex>
);
