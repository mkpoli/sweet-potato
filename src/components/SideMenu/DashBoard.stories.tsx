import React from 'react';
import SideMenu from 'components/SideMenu/DashBoard';
import { Box } from '@chakra-ui/react';

export default { title: 'SideMenu/DashBoard' };

export const normal = (): JSX.Element => (
  <Box h="100%" maxW="300px">
    <SideMenu index={0} />
  </Box>
);
