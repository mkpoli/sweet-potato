import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';

const NotFound: React.FC = () => {
  return (
    <Container my={[8, 16]} centerContent>
      <Box pt={8}>
        <Heading fontSize={['4em', '5em', '6em']}>404</Heading>
      </Box>
      <Box>
        <Text>お探しのページは見つかりませんでした。</Text>
      </Box>
    </Container>
  );
};

export default NotFound;
