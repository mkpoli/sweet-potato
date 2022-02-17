import React, { useEffect, useState } from 'react';
import {
  useMediaQuery,
  Flex,
  Box,
  useColorModeValue,
  Spacer,
  Button,
  Spinner,
} from '@chakra-ui/react';
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
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(isLargerThan1024);
  }, [isLargerThan1024]);

  return (
    <Flex
      mb={8}
      px={[4, 4, 8, 8, 16]}
      py={5}
      w="full"
      align="center"
      bgColor={useColorModeValue('bodyBg.light', 'bodyBg.dark')}
      userSelect="none"
      position="fixed"
      zIndex={10}
      borderBottom="1px"
      borderColor={useColorModeValue('componentBg.light', 'componentBg.dark')}
    >
      <Link href="/">
        <Logo />
      </Link>
      <Spacer />
      <Flex align="center" style={{ visibility: visible ? 'visible' : 'hidden' }}>
        {!status.isLoaded ? (
          <Flex align="center" fontSize="1em" w="5em">
            <Spinner size="sm" color="potato" />
          </Flex>
        ) : (
          <>
            {status.isAuthed ? (
              <Box mx={[0, 2, 4]} fontSize="1em" w="8em">
                <Link href="/dashboard/contents/levels">
                  <Button leftIcon={<FiUser />} border="1px" width="full">
                    {t.HEADER.MYPAGE}
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box mx={[0, 2, 4]} fontSize="1em" w="7em">
                <Login />
              </Box>
            )}
          </>
        )}
      </Flex>
      <Box>
        <DrawerMenu />
      </Box>
    </Flex>
  );
};

export default HeaderNav;
