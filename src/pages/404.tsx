import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import SEO from 'components/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO path="/404" title="404" description="" thumbnail="" allowIndex={false} />
      <Container centerContent>
        <Box pt={8}>
          <Heading fontSize={['4em', '5em', '6em']}>404</Heading>
        </Box>
        <Box>
          <Text>お探しのページは見つかりませんでした。</Text>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
