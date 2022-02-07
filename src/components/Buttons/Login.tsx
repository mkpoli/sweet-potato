import React from 'react';
import { Button } from '@chakra-ui/react';
import { FiLogIn } from 'react-icons/fi';

import firebase from 'framework/firebase/init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useLocaleValue } from 'hooks/locales';
import { useAuth } from 'hooks/auth';

const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const { setStatus } = useAuth();

  const popupLogin = (): void => {
    const auth = getAuth(firebase);
    signInWithPopup(auth, provider).then(async (credential) => {
      console.log(credential.user.uid);
      setStatus({
        isLoaded: true,
        isAuthed: true,
      });
    });
  };

  return (
    <Button leftIcon={<FiLogIn />} bgColor="potato" color="white" onClick={popupLogin}>
      {useLocaleValue({ ja: 'ログイン', en: 'Login' })}
    </Button>
  );
};

export default Login;
