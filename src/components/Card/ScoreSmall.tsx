import React from 'react';
import { Box, Heading, AspectRatio, Image, Grid, GridItem } from '@chakra-ui/react';
import Rating from 'components/Badge/Rating';
import Link from 'components/Link';
import { Level } from 'models/Level';

const ScoreSmall: React.FC<Level> = ({ name, title, rating, author, cover }) => {
  return (
    <Link href={`/levels/${name}`}>
      <Grid
        p={1}
        templateColumns="repeat(7, 1fr)"
        gap={{ base: 2, lg: 4, xl: 4 }}
        _hover={{ transform: 'scale(1.01, 1.01)', transitionDuration: '0.1s' }}
      >
        <GridItem colSpan={3}>
          <AspectRatio ratio={8 / 5}>
            <Image
              src={`${process.env.API_URL_LEGACY}${cover.url}`}
              alt=""
              objectFit="cover"
              pointerEvents="none"
            />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={4} fontSize={['0.9em', '0.9em', '0.85em', '0.85em', '0.9em', '0.95em']}>
          <Box mb={1}>
            <Heading
              fontSize="1em"
              noOfLines={2}
              style={{
                overflowWrap: 'anywhere',
              }}
            >
              {title}
            </Heading>
          </Box>
          <Box my={1}>
            <Rating rate={rating} />
          </Box>
          <Box
            mt={2}
            noOfLines={1}
            style={{
              overflowWrap: 'anywhere',
            }}
          >
            {author}
          </Box>
        </GridItem>
      </Grid>
    </Link>
  );
};

export default ScoreSmall;
