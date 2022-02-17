import React from 'react';
import SideMenu from 'components/DashBoard/SideMenu';
import { Box } from '@chakra-ui/react';

export default { title: 'DashBoard/SideMenu' };

export const normal = (): JSX.Element => (
  <Box h="100%" maxW="300px">
    <SideMenu />
  </Box>
);
