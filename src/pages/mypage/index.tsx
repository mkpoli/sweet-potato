import React from 'react';
import { useLocale } from 'hooks/locales';
import { Container, Heading } from '@chakra-ui/react';

const Index: React.FC = () => {
  const { t } = useLocale();
  return (
    <>
      <Container>
        <Heading mt={[4, 4, 4, 4, 6]} mb={[6, 6, 6, 6, 8]} fontSize="1.4em" textAlign="center">
          {t.HEADER.MYPAGE}
        </Heading>
      </Container>
    </>
  );
};

export default Index;
