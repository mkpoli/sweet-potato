import React from 'react';
import Rating from './Rating';
import { Stack } from '@chakra-ui/react';

export default { title: 'Badge/Level' };

export const normal = (): JSX.Element => (
  <Stack direction="row">
    <Rating rate={10} />
    <Rating rate={20} />
    <Rating rate={30} />
    <Rating rate={40} />
    <Rating rate={50} />
  </Stack>
);
