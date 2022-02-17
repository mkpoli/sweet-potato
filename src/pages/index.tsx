import React, { useState, useEffect } from 'react';
import { useLocale } from 'hooks/locales';
import { Container, SimpleGrid, Flex, Skeleton, Heading, Box } from '@chakra-ui/react';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { client } from 'framework/potato/client';
import { Level } from 'framework/potato/api/@types';
import SEO from 'components/SEO';
import Score from 'components/Card/Score';
import Link from 'components/Link';

const Home: React.FC = () => {
  const { t } = useLocale();
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
      <SEO path="/" title={t.TOP_PAGE.PAGE_TITLE} description="" thumbnail="" allowIndex={true} />
      <Container>
        <Box mb={24} textAlign="center">
          <Heading mt={8} fontSize={['2em', '2.4em', '2.4em', '2.4em', '2.8em', '3.2em']}>
            Fan-made
            <br />
            Rhythm Game Community
          </Heading>
          <Box>
            <Link href="https://wiki.purplepalette.net/home" isExternal>
              <Flex mt={4} align="center" justify="center" color="potato" gap={2}>
                <Heading fontSize="1.2em">See Wiki</Heading>
                <Box fontSize="1.2em">
                  <FiExternalLink />
                </Box>
              </Flex>
            </Link>
          </Box>
        </Box>
        <Heading mt={[4, 4, 4, 4, 6]} mb={[6, 6, 6, 6, 8]} fontSize="1.4em" textAlign="center">
          {t.TOP_PAGE.NEW_SCORE_LIST}
        </Heading>

        <Box my={8}>
          <SimpleGrid columns={[1, 2, 2, 3, 4, 5, 6]} spacing={[4, 4, 4, 4, 6, 6, 8]}>
            {levels === undefined ? (
              <>
                {(() => {
                  const rep = [];
                  for (let i = 0; i < 10; i++) {
                    rep.push(<Skeleton key={i} height="300px" borderRadius="base" />);
                  }
                  return <>{rep}</>;
                })()}
              </>
            ) : (
              <>
                {levels.slice(0, 10).map((level: Level) => (
                  <Score key={level.createdTime} {...level} />
                ))}
              </>
            )}
          </SimpleGrid>
          <Box>
            <Link href="/levels/new">
              <Flex mt={[6, 6, 6, 6, 8]} align="center" justify="center" color="potato" gap={2}>
                <Heading fontSize="1.2em">もっと見る</Heading>
                <Box fontSize="1.2em">
                  <FiArrowRight />
                </Box>
              </Flex>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
