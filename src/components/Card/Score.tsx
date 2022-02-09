import React from 'react';
import {
  useColorModeValue,
  Flex,
  Spacer,
  Box,
  Heading,
  Text,
  AspectRatio,
  Image,
} from '@chakra-ui/react';
import Rating from 'components/Badge/Rating';
import Link from 'components/Link';
import { Level } from 'models/Level';

const Score: React.FC<Level> = ({ name, title, rating, author, cover }) => {
  return (
    <Link href={`/score/${name}`} variant="card">
      <Box
        p={4}
        borderRadius="base"
        bgColor={useColorModeValue('white', 'componentBg.dark')}
        shadow={useColorModeValue('card', 'none')}
        userSelect="none"
      >
        <Flex mb={3}>
          <Box>
            <Flex height="3em" align="center">
              <Heading
                fontSize={['1em', '0.9em', '1em', '1.05em']}
                noOfLines={2}
                style={{
                  overflowWrap: 'anywhere',
                }}
              >
                {title}
              </Heading>
            </Flex>
          </Box>
          <Spacer />
          <Box ml={2} fontSize={['1.2em', '1.2em', '1.2em', '1.4em']}>
            <Rating rate={rating} />
          </Box>
        </Flex>
        <Box my={3}>
          <AspectRatio ratio={1}>
            <Image
              src={`${process.env.API_URL}${cover.url}`}
              alt=""
              objectFit="cover"
              borderRadius="base"
              pointerEvents="none"
            />
          </AspectRatio>
        </Box>
        <Box mt={3}>
          <Flex align="center" borderRadius="base" fontSize="0.8em">
            <Box
              height="1.8em"
              width="1.8em"
              borderRadius="circle"
              bgColor={useColorModeValue('componentBg.light', 'componentBg.dark')}
            />
            <Text
              mx={2}
              noOfLines={1}
              style={{
                overflowWrap: 'anywhere',
              }}
            >
              {author}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default Score;
