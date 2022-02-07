import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';

const UserIcon: React.FC = () => {
  const { profile } = useAuth();
  return (
    <Flex mr={8} height="100%" alignItems="center">
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
        <Text mx={2} fontSize="0.8em">
          でログイン中
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserIcon;
