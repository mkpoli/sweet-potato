import React from 'react';
import { NextPageContext } from 'next';
import {
  useColorModeValue,
  Container,
  Flex,
  Stack,
  AspectRatio,
  Box,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';
import { client } from 'framework/potato/client';
import { Level } from 'models/Level';
import SEO from 'components/SEO';

const ScoreDetail: React.FC<Level> = ({ name, title, cover, description, author }) => {
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
      <Container>
        <Stack my={4} direction={['column', 'column', 'row']} spacing={[2, 2, 8]}>
          <Box w={['100%', '100%', '240px']}>
            <AspectRatio ratio={[4 / 3, 16 / 9, 1]}>
              <Image
                src={`${process.env.API_URL}${cover.url}`}
                alt=""
                objectFit="cover"
                borderRadius="base"
                userSelect="none"
                pointerEvents="none"
              />
            </AspectRatio>
          </Box>
          <Box>
            <Flex mb={2} align="center">
              <Heading fontSize={['1.2em', '1.3em', '1.4em']} noOfLines={2}>
                {title}
              </Heading>
            </Flex>
            <Flex my={2} align="center" borderRadius="base" fontSize="0.9em">
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
            <Box my={4}>
              {description == undefined ? <Text>説明なし</Text> : <Text>{description}</Text>}
            </Box>
          </Box>
        </Stack>
      </Container>
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
