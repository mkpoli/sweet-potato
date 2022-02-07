import React from 'react';
import { Container, Flex, Box, useColorModeValue, Spacer } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';

import Logo from 'components/Header/Logo';
import Login from 'components/Buttons/Login';
import Link from 'components/Link';
import DrawerMenu from './DrawerMenu';
import UserIcon from './UserIcon';

const HeaderNav: React.FC = () => {
  const { status } = useAuth();

  return (
    <Container>
      <Flex
        w="full"
        py={5}
        align="center"
        bgColor={useColorModeValue('bodyBg.light', 'bodyBg.dark')}
        userSelect="none"
      >
        <Link href="/">
          <Logo />
        </Link>
        <Spacer />
        <Box>
          {status.isAuthed ? (
            <UserIcon />
          ) : (
            <Box mx={4}>
              <Login />
            </Box>
          )}
        </Box>
        <Box>
          <DrawerMenu />
        </Box>
      </Flex>
    </Container>
  );
};

export default HeaderNav;
