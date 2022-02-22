import React from 'react';
import { Badge, Flex, Text } from '@chakra-ui/react';

type Props = {
  rate: number;
};

const RatingLarge: React.FC<Props> = ({ rate }) => {
  let color = '#6bcaf9';

  if (rate > 30) {
    color = '#9c27b0';
  } else if (rate > 21) {
    color = '#f44336';
  } else if (rate > 12) {
    color = '#f8e03b';
  }

  return (
    <Badge fontSize="2em" w="5em" h="2em" px={2} bgColor={color} color="white" borderRadius="base">
      <Flex w="full" h="full" align="center" justify="center">
        <Text mx={2}>Lv.</Text>
        <Text>{rate}</Text>
      </Flex>
    </Badge>
  );
};

export default RatingLarge;
