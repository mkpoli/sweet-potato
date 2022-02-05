import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Score from './Score';

export default { title: 'Card/Score' };

export const defaultStyle = (): JSX.Element => (
  <SimpleGrid mx={[0, 0, 0, 0, 12]} columns={[1, 2, 2, 3, 4]} spacing={[2, 2, 4, 4, 8]}>
    <Score />
    <Score />
    <Score />
    <Score />
  </SimpleGrid>
);
