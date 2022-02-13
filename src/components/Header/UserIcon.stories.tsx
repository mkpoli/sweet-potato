import React, { useEffect } from 'react';
import UserIcon from 'components/Header/UserIcon';
import { useAuth } from 'hooks/auth';
import { Box } from '@chakra-ui/react';

export default { title: 'Header/UserIcon' };

export const authed = () => {
  return <Authed />;
};

const Authed: React.FC = () => {
  const { setProfile } = useAuth();

  useEffect(() => {
    setProfile({
      uid: 'unique_id',
      userName: 'テストABC123#$%',
      profileImage: 'https://via.placeholder.com/150',
    });
  });

  return (
    <Box w="300px">
      <UserIcon />
    </Box>
  );
};
