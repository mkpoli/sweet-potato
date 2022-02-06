import React from 'react';
import { Flex, Box, Heading, useColorModeValue, Spacer, Button } from '@chakra-ui/react';
import { FiLogIn, FiUploadCloud } from 'react-icons/fi';

import Logo from './Logo';

const HeaderNav: React.FC = () => {
  return (
    <Flex
      w="full"
      py={4}
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
        <Button leftIcon={<FiUploadCloud />} bgColor="potato" color="white">
          投稿
        </Button>
        <Button leftIcon={<FiLogIn />} bgColor="potato" color="white">
          ログイン
        </Button>
      </Box>
    </Flex>
  );
};

export default HeaderNav;
