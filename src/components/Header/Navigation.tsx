import React from 'react';
import { Container, Flex, Box, useColorModeValue, Spacer, Button } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';
import { FiUser } from 'react-icons/fi';
import { useLocale } from 'hooks/locales';

import Logo from 'components/Header/Logo';
import Login from 'components/Buttons/Login';
import Link from 'components/Link';
import DrawerMenu from './DrawerMenu';

const HeaderNav: React.FC = () => {
  const { status } = useAuth();
  const { t } = useLocale();

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
            <Link href="/mypage">
              <Button leftIcon={<FiUser />} border="1px" width="full">
                {t.HEADER.MYPAGE}
              </Button>
            </Link>
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
