import React from 'react';
import { useRouter } from 'next/router';
import {
  useDisclosure,
  useColorModeValue,
  Flex,
  Box,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  SimpleGrid,
  Icon,
  Spinner,
} from '@chakra-ui/react';
import { FiMenu, FiUploadCloud, FiUser } from 'react-icons/fi';
import { MdLanguage } from 'react-icons/md';
import { useAuth } from 'hooks/auth';
import Logo from 'components/Header/Logo';
import UserIcon from 'components/Header/UserIcon';
import Login from 'components/Buttons/Login';
import Link from 'components/Link';
import { useLocale } from 'hooks/locales';

const DrawerMenu: React.FC = () => {
  const { status } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, locale } = useLocale();
  const router = useRouter();

  return (
    <>
      <Box ml={3} boxSize="40px">
        <Button
          id="drawer"
          p={0}
          borderRadius="circle"
          onClick={onOpen}
          color={useColorModeValue('heading.light', 'heading.daark')}
          _focus={{ boxShadow: 'focus' }}
        >
          <Flex align="center" justify="center" boxSize="40px">
            <Icon as={FiMenu} fontSize="1.5em" />
          </Flex>
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} autoFocus={false}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex py={4} justify="left" fontSize="0.7em">
                <Logo />
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <Box>
                {!status.isLoaded ? (
                  <Flex justify="center" width="100%">
                    <Spinner size="sm" color="potato" />
                  </Flex>
                ) : (
                  <>
                    {status.isAuthed ? (
                      <>
                        <Box mb={8}>
                          <UserIcon />
                        </Box>
                        <SimpleGrid spacing={2}>
                          <Link href="/levels/upload">
                            <Button
                              leftIcon={<FiUploadCloud />}
                              bgColor="potato"
                              color="white"
                              width="full"
                            >
                              {t.HEADER.UPLOAD}
                            </Button>
                          </Link>
                          <Link href="/dashboard/contents/levels">
                            <Button leftIcon={<FiUser />} border="1px" width="full">
                              {t.HEADER.MYPAGE}
                            </Button>
                          </Link>
                        </SimpleGrid>
                      </>
                    ) : (
                      <Login />
                    )}
                  </>
                )}
              </Box>
              <Box>
                <Stack spacing={[2, 4]} fontSize={['1em', '1.05em', '1.1em', '1.2em']}></Stack>
              </Box>
            </DrawerBody>
            <DrawerFooter>
              <Box pb={4} w="full" fontSize={['0.9em', '0.9em', '1em']} fontWeight="bold">
                <Menu>
                  <MenuButton as={Button} leftIcon={<MdLanguage />}>
                    Change Language
                  </MenuButton>
                  <MenuList>
                    <MenuOptionGroup
                      defaultValue={locale}
                      title="Language"
                      type="radio"
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onChange={(value: any) =>
                        router.push(router.pathname, router.pathname, { locale: value })
                      }
                    >
                      <MenuItemOption value="ja">日本語</MenuItemOption>
                      <MenuItemOption value="en">English</MenuItemOption>
                      <MenuItemOption value="zh">中国語(簡体)</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Box>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
