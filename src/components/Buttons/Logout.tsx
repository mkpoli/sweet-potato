import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { useLocaleValue } from 'hooks/locales';
import { useAuth } from 'hooks/auth';

const Logout: React.FC = () => {
  const { setStatus, setProfile } = useAuth();

  const revokeToken = (): void => {
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setStatus({
      isLoaded: true,
      isAuthed: false,
    });

    setProfile({
      uid: undefined,
      userName: undefined,
      profileImage: undefined,
    });
  };

  return (
    <Flex justify="right" width="full">
      <Button leftIcon={<FiLogOut />} onClick={revokeToken} fontWeight={400} fontSize="0.8em">
        {useLocaleValue({ ja: 'ログアウト', en: 'Log out' })}
      </Button>
    </Flex>
  );
};

export default Logout;
