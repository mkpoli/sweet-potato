import React from 'react';
import { useLocale } from 'hooks/locales';
import { Container, SimpleGrid, Heading } from '@chakra-ui/react';
import Score from 'components/Card/Score';

const Home: React.FC = () => {
  const { t } = useLocale();
  return (
    <>
      <Container>
        <Heading mt={[4, 4, 4, 4, 6]} mb={[6, 6, 6, 6, 8]} fontSize="1.4em" textAlign="center">
          {t.NEW_SCORE_LIST}
        </Heading>
        <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={[2, 4, 4, 4, 6]}>
          <Score />
          <Score />
          <Score />
          <Score />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
