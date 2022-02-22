import React from 'react';
import { Flex, Box, Container, Heading } from '@chakra-ui/react';
import { FcMusic } from 'react-icons/fc';
import Link from 'components/Link';

const PagesMenu: React.FC = () => {
  return (
    <Box
      w="full"
      position="fixed"
      bgColor="bodyBg.light"
      borderBottom="1px"
      borderColor="componentBg.light"
      zIndex={2}
    >
      <Container pt="85px">
        <Flex
          flexWrap="nowrap"
          overflowX="auto"
          sx={{
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Box my={4} mx={4} flexShrink={0} fontSize="1.4em">
            <Link href="/levels/new">
              <Flex align="center" gap={2}>
                <Box fontSize="1em">
                  <FcMusic />
                </Box>
                <Heading fontSize="0.75em">譜面</Heading>
              </Flex>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default PagesMenu;
