import React from 'react';
import GenreSelect from 'components/Forms/GenreSelect';
import { Box } from '@chakra-ui/react';

export default { title: 'Forms/GenreSelect' };

export const normal = (): JSX.Element => (
  <Box w="300px">
    <GenreSelect id="genre" />
  </Box>
);
