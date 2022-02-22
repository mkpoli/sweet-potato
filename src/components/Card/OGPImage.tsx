import {
  ChakraProvider,
  Grid,
  GridItem,
  Flex,
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
} from '@chakra-ui/react';
import theme from 'theme';
import { FaHeart, FaClipboardList } from 'react-icons/fa';
import { RiSwordFill } from 'react-icons/ri';
import { Level } from 'framework/potato/api/@types';

const OGPImage = ({ title, author, cover, rating }: Level) => {
  let color = '#6bcaf9';

  if (rating > 30) {
    color = '#9c27b0';
  } else if (rating > 21) {
    color = '#f44336';
  } else if (rating > 12) {
    color = '#f8e03b';
  }

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box position="relative" w="full" h="full">
          <Box p={12} w="full" h="full">
            <Box pb="25px" w="full" h="full" bgColor="white" borderRadius="1em">
              <Box w="full" h="full">
                <Grid h="full" templateColumns="repeat(3, 1fr)" gap={8}>
                  <GridItem position="relative" colSpan={2}>
                    <Box>
                      <Box mb={8}>
                        <Heading fontSize="3.6em" fontWeight={700} noOfLines={2}>
                          {title}
                        </Heading>
                      </Box>
                      <Flex mt={8} align="center" gap={4}>
                        <Box bgColor="componentBg.light" boxSize="4em" borderRadius="circle" />
                        <Box>
                          <Heading fontSize="2em" fontWeight={700} noOfLines={1}>
                            {author}
                          </Heading>
                        </Box>
                      </Flex>
                    </Box>
                    <Flex position="absolute" align="center" fontSize="3.2em" bottom={4} gap={24}>
                      <Flex align="start" gap={4} lineHeight={1}>
                        <Box color="pink">
                          <RiSwordFill />
                        </Box>
                        <Box fontSize="0.8em">
                          <Heading>{rating}</Heading>
                          <Text my={1} fontSize="0.7em">
                            Rating
                          </Text>
                        </Box>
                      </Flex>
                      <Flex align="start" gap={4} lineHeight={1}>
                        <Box color="pink">
                          <FaHeart />
                        </Box>
                        <Box fontSize="0.8em">
                          <Heading>0</Heading>
                          <Text my={1} fontSize="0.7em">
                            Likes
                          </Text>
                        </Box>
                      </Flex>
                      <Flex align="start" gap={4} lineHeight={1}>
                        <Box color="pink">
                          <FaClipboardList />
                        </Box>
                        <Box fontSize="0.8em">
                          <Heading>0</Heading>
                          <Text my={1} fontSize="0.7em">
                            Listed
                          </Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Box w="100%">
                      <AspectRatio ratio={1}>
                        <Image
                          src={`${process.env.API_URL_LEGACY}${cover.url}`}
                          alt=""
                          objectFit="cover"
                          borderRadius="1em"
                        />
                      </AspectRatio>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Box position="absolute" bottom={0} w="full" h="25px" bgColor={color} />
        </Box>
      </ChakraProvider>
    </>
  );
};

export default OGPImage;
