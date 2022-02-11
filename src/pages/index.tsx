import React, { useState, useEffect } from 'react';
import { useLocale } from 'hooks/locales';
import { Container, SimpleGrid, Flex, Skeleton, Text, Heading, Button } from '@chakra-ui/react';
import Score from 'components/Card/Score';
import { client } from 'framework/potato/client';
import { Level } from 'models/Level';
import SEO from 'components/SEO';

const Home: React.FC = () => {
  const { t } = useLocale();
  const [levels, setLevels] = useState<Level[]>([]);
  const [nextPage, setNextPage] = useState<number>(0);
  const [end, setEnd] = useState<boolean>(false);

  const fetchScores = async () => {
    const raw = await client.levels.list.$get({ query: { page: nextPage } });
    setLevels(levels.concat(raw.items));

    if (raw.items.length !== 20) {
      setEnd(true);
      return;
    }
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    if (levels.length !== 0) return;

    fetchScores();
  });

  return (
    <>
      <SEO path="/" title={t.TOP_PAGE.PAGE_TITLE} description="" thumbnail="" allowIndex={true} />
      <Container>
        <Heading mt={[4, 4, 4, 4, 6]} mb={[6, 6, 6, 6, 8]} fontSize="1.4em" textAlign="center">
          {t.TOP_PAGE.NEW_SCORE_LIST}
        </Heading>

        <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={[2, 4, 4, 4, 6]}>
          {levels.length === 0 ? (
            <>
              {(() => {
                const rep = [];
                for (let i = 0; i < 8; i++) {
                  rep.push(<Skeleton key={i} height="300px" borderRadius="base" />);
                }
                return <>{rep}</>;
              })()}
            </>
          ) : (
            <>
              {levels.map((level: Level) => (
                <Score key={level.createdTime} {...level} />
              ))}
            </>
          )}
        </SimpleGrid>
        <Flex my={8} justify="center" width="full">
          {!end ? (
            <Button
              color="white"
              bgColor="potato"
              width={['100%', '40%']}
              onClick={() => {
                fetchScores();
              }}
            >
              {t.TOP_PAGE.LOAD_MORE}
            </Button>
          ) : (
            <Text fontSize="0.9em">{t.TOP_PAGE.NO_MORE_SCORE}</Text>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default Home;
