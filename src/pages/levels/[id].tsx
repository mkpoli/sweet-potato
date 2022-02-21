import React, { useState, useEffect } from 'react';
import { NextPageContext } from 'next';
import {
  useColorModeValue,
  Container,
  Flex,
  AspectRatio,
  Box,
  Image,
  Heading,
  Text,
  Grid,
  GridItem,
  Skeleton,
  Alert,
} from '@chakra-ui/react';
import { client } from 'framework/potato/client';
import { Level } from 'models/Level';
import { FcLike } from 'react-icons/fc';
import SEO from 'components/SEO';
import RatingLarge from 'components/Badge/RatingLarge';
import ScoreSmall from 'components/Card/ScoreSmall';

const ScoreDetail: React.FC<Level> = ({ name, title, cover, author, rating }) => {
  const [levels, setLevels] = useState<Level[]>();

  const fetchScores = async () => {
    const raw = await client.levels.list.$get({ query: { page: 0 } });
    setLevels(raw.items);
  };

  useEffect(() => {
    if (levels !== undefined) return;

    fetchScores();
  });

  return (
    <>
      <SEO
        path={`/levels/${name}`}
        title={title}
        description={`${author}さんが${title}を公開しました。`}
        keywords={`${author},${title}`}
        thumbnail={`${process.env.NEXT_PUBLIC_FRONT_URL}/api/ogp/${name}`}
        allowIndex={true}
      />

      <Box
        position="relative"
        backgroundImage={`${process.env.API_URL_LEGACY}${cover.url}`}
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <Box w="full" h="full" position="absolute" bgColor="text.light" opacity={0.8} />
        <Container variant="cover">
          <Grid
            pt="85px"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(5, 1fr)',
            }}
            gap={{ base: 2, lg: 4, xl: 8 }}
          >
            <GridItem colSpan={{ base: 1, lg: 2, xl: 2 }} zIndex={2}>
              <Box>
                <AspectRatio ratio={[1]}>
                  <Flex align="center" justify="center">
                    <Image
                      src={`${process.env.API_URL_LEGACY}${cover.url}`}
                      alt=""
                      boxSize={{ base: '90%', lg: '70%' }}
                      borderRadius="base"
                      objectFit="cover"
                      userSelect="none"
                      pointerEvents="none"
                    />
                  </Flex>
                </AspectRatio>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 2, xl: 3 }} zIndex={2} color="white">
              <Flex h="full" align="center" justify="left">
                <Box w="full" fontSize={{ base: '1.6em', xl: '2em' }}>
                  <Flex my={2} align="center" gap={8}>
                    <Heading fontSize="1em" noOfLines={2}>
                      {title}
                    </Heading>
                    <Box my={2} fontSize="0.3em">
                      <RatingLarge rate={rating} />
                    </Box>
                  </Flex>
                  <Flex my={2} align="center" gap={4}>
                    <Box fontSize="1em">
                      <FcLike />
                    </Box>
                    <Heading fontSize="0.9em">0</Heading>
                  </Flex>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box mx={{ base: 2, xl: 12, '2xl': 16 }}>
        <Box>
          <Grid
            pt={4}
            templateColumns={{
              base: 'repeat(1, 1fr)',
              xl: 'repeat(3, 1fr)',
              '2xl': 'repeat(4, 1fr)',
            }}
            gap={{ base: 2, xl: 8 }}
          >
            <GridItem colSpan={{ base: 1, xl: 2, '2xl': 3 }}>
              <Container pt={0}>
                <Flex my={2} align="center" borderRadius="base" fontSize="1em" gap={2}>
                  <Box
                    height="3em"
                    width="3em"
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
                <Box my={8}>
                  <Heading fontSize="1.2em">楽曲情報</Heading>

                  <Alert
                    my={2}
                    color="white"
                    bgColor="#79BD9A"
                    fontWeight={700}
                    borderRadius="base"
                  >
                    この譜面には楽曲情報が登録されていません。
                  </Alert>
                </Box>
              </Container>
            </GridItem>
            <GridItem colSpan={1}>
              {levels === undefined ? (
                <>
                  {(() => {
                    const rep = [];
                    for (let i = 0; i < 10; i++) {
                      rep.push(<Skeleton my={2} key={i} height="130px" borderRadius="base" />);
                    }
                    return <>{rep}</>;
                  })()}
                </>
              ) : (
                <>
                  {levels.map((level: Level) => (
                    <ScoreSmall key={level.createdTime} {...level} />
                  ))}
                </>
              )}
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ScoreDetail;

export async function getServerSideProps(context: NextPageContext): Promise<{
  props?: Level;
  notFound?: boolean;
}> {
  const { id } = context.query;

  // 後で修正するクソコード(APIの修正が必要)
  try {
    const res = await client.levels._levelName(`${id}`).get();

    if (res.status !== 200) {
      return {
        notFound: true,
      };
    }

    const level = res.body.item;

    return {
      props: level,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
