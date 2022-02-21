import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';
import Logout from 'components/Buttons/Logout';

const UserIcon: React.FC = () => {
  const { profile } = useAuth();
  return (
    <Box p={4} borderRadius="base" border="2px" borderColor="componentBg.light">
      <Flex mr={8} width="full" alignItems="center">
        <Box mx={2}>
          <Image
            src={profile.profileImage}
            height="2.5em"
            borderRadius="circle"
            pointerEvents="none"
          />
        </Box>
        <Flex mx={2} alignItems="center">
          <Text fontWeight={500}>{profile.userName}</Text>
        </Flex>
      </Flex>
      <Logout />
    </Box>
  );
};

export default UserIcon;
