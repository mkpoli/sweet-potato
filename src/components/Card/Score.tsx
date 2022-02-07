import React from 'react';
import {
  useColorModeValue,
  Flex,
  Spacer,
  Box,
  Heading,
  IconButton,
  AspectRatio,
  Image,
} from '@chakra-ui/react';
import { BsBookmarkStar } from 'react-icons/bs';
import Level from 'components/Badge/Level';
import Link from 'components/Link';

const Score: React.FC = () => {
  return (
    <Link href="/" variant="card">
      <Box
        p={4}
        borderRadius="base"
        bgColor={useColorModeValue('white', 'componentBg.dark')}
        shadow={useColorModeValue('card', 'none')}
        userSelect="none"
      >
        <Flex mb={3}>
          <Box>
            <Heading fontSize={['1em', '0.9em', '1em', '1.05em']}>マトリョシカ</Heading>
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
    </Link>
  );
};

export default Score;
