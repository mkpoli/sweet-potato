import React from 'react';
import {
  useColorModeValue,
  Flex,
  Spacer,
  Box,
  Heading,
  Text,
  IconButton,
  AspectRatio,
  Image,
} from '@chakra-ui/react';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import Level from '../Badge/Level';

const Score: React.FC = () => {
  return (
    <Box
      p={4}
      borderRadius="base"
      bgColor={useColorModeValue('white', 'componentBg.dark')}
      shadow={useColorModeValue('card', 'none')}
      userSelect="none"
    >
      <Flex mb={4}>
        <Box>
          <Heading fontSize={['1em', '0.9em', '1em', '1.05em']}>マトリョシカ</Heading>
          <Text fontSize={['0.9em', '0.8em', '0.9em', '0.95em']}>ジャンル</Text>
          <Level level={30} />
        </Box>
        <Spacer />
        <Box fontSize={['1.2em', '1.2em', '1.2em', '1.4em']}>
          <IconButton aria-label="Bookmark" icon={<BsBookmarkStar />} />
        </Box>
      </Flex>
      <Box my={2}>
        <AspectRatio ratio={1}>
          <Image
            src="https://servers-legacy.purplepalette.net/repository/76mINhVZtLNW/cover.png"
            alt=""
            objectFit="cover"
            borderRadius="base"
            pointerEvents="none"
          />
        </AspectRatio>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Score;
