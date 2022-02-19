import React from 'react';
import Documents from 'components/SideMenu/Documents';
import { Box } from '@chakra-ui/react';

export default { title: 'SideMenu/Documents' };

export const normal = (): JSX.Element => (
  <Box h="100%" maxW="300px">
    <Documents index={0} />
  </Box>
);
