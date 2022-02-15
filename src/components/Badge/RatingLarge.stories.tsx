import React from 'react';
import RatingLarge from 'components/Badge/RatingLarge';
import { Stack } from '@chakra-ui/react';

export default { title: 'Badge/RatingLarge' };

export const normal = (): JSX.Element => (
  <Stack direction="row">
    <RatingLarge rate={10} />
    <RatingLarge rate={20} />
    <RatingLarge rate={30} />
    <RatingLarge rate={40} />
    <RatingLarge rate={50} />
  </Stack>
);
