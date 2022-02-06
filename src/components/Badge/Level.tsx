import React from 'react';
import { Badge } from '@chakra-ui/react';

type Props = {
  level: number;
};

const Level: React.FC<Props> = ({ level }) => {
  let color = '#6bcaf9';

  if (level > 30) {
    color = '#9c27b0';
  } else if (level > 25) {
    color = '#f44336';
  } else if (level > 15) {
    color = '#f8e03b';
  }

  return (
    <Badge px={2} bgColor={color} color="white" borderRadius="base" textAlign="center">
      Lv. {level}
    </Badge>
  );
};

export default Level;
