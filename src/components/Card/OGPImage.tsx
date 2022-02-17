import {
  ChakraProvider,
  Grid,
  GridItem,
  Flex,
  Box,
  Spacer,
  Heading,
  AspectRatio,
  Image,
} from '@chakra-ui/react';
import theme from 'theme';
import RatingLarge from 'components/Badge/RatingLarge';
import { Level } from 'framework/potato/api/@types';

const OGPImage = ({ title, author, cover, rating }: Level) => (
  <>
    <ChakraProvider theme={theme}>
      <Box p={12} w="full" h="full" bgGradient="linear(to-r, potato, pink)">
        <Box p={8} w="full" h="full" bgColor="white" borderRadius="1em">
          <Box w="full" h="full">
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
              <GridItem colSpan={1}>
                <AspectRatio ratio={1}>
                  <Image
                    src={`${process.env.API_URL_LEGACY}${cover.url}`}
                    alt=""
                    objectFit="cover"
                    borderRadius="1em"
                  />
                </AspectRatio>
              </GridItem>
              <GridItem px={2} colSpan={2}>
                <Heading fontSize="2.8em" fontWeight={700}>
                  {title}
                </Heading>
                <Box my={4}>
                  <RatingLarge rate={rating} />
                </Box>
              </GridItem>
            </Grid>
            <Flex mt={20} align="center">
              <Flex gap={4} align="center">
                <Box w="5em" h="5em" bgColor="componentBg.light" borderRadius="circle" />
                <Heading fontSize="2em">{author}</Heading>
              </Flex>
              <Spacer />
              <Box>
                <Image
                  w="16em"
                  src={`${process.env.NEXT_PUBLIC_FRONT_URL}/logo.png`}
                  alt=""
                  objectFit="cover"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  </>
);

export default OGPImage;
