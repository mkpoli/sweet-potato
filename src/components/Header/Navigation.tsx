import React from 'react';
import { Container, Flex, Box, Heading, useColorModeValue, Spacer, Button } from '@chakra-ui/react';
import { FiUploadCloud } from 'react-icons/fi';
import { useAuth } from 'hooks/auth';

import Logo from 'components/Header/Logo';
import Login from 'components/Buttons/Login';

const HeaderNav: React.FC = () => {
  const { status } = useAuth();

  return (
    <Container>
      <Flex
        w="full"
        py={5}
        align="center"
        alignItems="flex-end"
        bgColor={useColorModeValue('bodyBg.light', 'bodyBg.dark')}
        userSelect="none"
      >
        <Logo />
        <Flex lineHeight="none">
          <Heading mx={2} fontSize="1em" fontWeight="600">
            ホーム
          </Heading>
          <Heading mx={2} fontSize="1em" fontWeight="600">
            検索
          </Heading>
        </Flex>
        <Spacer />
        <Box>
          {status.isAuthed ? (
            <Button leftIcon={<FiUploadCloud />} bgColor="potato" color="white">
              投稿
            </Button>
          ) : (
            <Login />
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default HeaderNav;
