import React from 'react';
import Level from './Level';
import { Stack } from '@chakra-ui/react';

export default { title: 'Badge/Level' };

export const defaultStyle = (): JSX.Element => (
  <Stack direction="row">
    <Level level={10} />
    <Level level={20} />
    <Level level={30} />
    <Level level={40} />
    <Level level={50} />
  </Stack>
);
