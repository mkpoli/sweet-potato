import React from 'react';
import { Button } from '@chakra-ui/react';
import { FiLogIn } from 'react-icons/fi';

import firebase from 'framework/firebase/sdk';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useLocaleValue } from 'hooks/locales';
import { useAuth } from 'hooks/auth';

const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const { setStatus } = useAuth();

  const popupLogin = (): void => {
    const auth = getAuth(firebase);
    signInWithPopup(auth, provider).then(async () => {
      const idToken = await auth!.currentUser!.getIdToken();

      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: idToken,
        }),
      }).then((res) => {
        if (res.status !== 200) return;
        setStatus({
          isLoaded: false,
          isAuthed: true,
        });
      });
    });
  };

  return (
    <Button leftIcon={<FiLogIn />} bgColor="potato" color="white" onClick={popupLogin} width="full">
      {useLocaleValue({ ja: 'ログイン', en: 'Login', zh: '登錄', kr: '로그인' })}
    </Button>
  );
};

export default Login;
