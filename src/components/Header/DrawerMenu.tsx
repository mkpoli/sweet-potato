import React from 'react';
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
  Button,
  Icon,
} from '@chakra-ui/react';
import { FiMenu, FiUploadCloud } from 'react-icons/fi';
import { useAuth } from 'hooks/auth';
import Logo from 'components/Header/Logo';
import Login from 'components/Buttons/Login';

const DrawerMenu: React.FC = () => {
  const { status } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box ml={3} boxSize="40px">
        <Button
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
                {status.isAuthed ? (
                  <Button leftIcon={<FiUploadCloud />} bgColor="potato" color="white" width="full">
                    投稿
                  </Button>
                ) : (
                  <Login />
                )}
              </Box>
              <Box>
                <Stack spacing={[2, 4]} fontSize={['1em', '1.05em', '1.1em', '1.2em']}></Stack>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
