import React from 'react';
import { Badge } from '@chakra-ui/react';

type Props = {
  rate: number;
};

const Rating: React.FC<Props> = ({ rate }) => {
  let color = '#6bcaf9';

  if (rate > 30) {
    color = '#9c27b0';
  } else if (rate > 25) {
    color = '#f44336';
  } else if (rate > 15) {
    color = '#f8e03b';
  }

  return (
    <Badge px={2} bgColor={color} color="white" borderRadius="base" textAlign="center">
      Lv. {rate}
    </Badge>
  );
};

export default Rating;
