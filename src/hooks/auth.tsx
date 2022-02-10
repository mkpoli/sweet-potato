import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import firebase from 'framework/firebase/sdk';
import { getAuth } from 'firebase/auth';

export type status = {
  isLoaded: boolean;
  isAuthed: boolean;
};

export type profile = {
  uid: string | undefined;
  userName: string | undefined;
  profileImage: string | undefined;
};

export const statusState = atom<status>({
  key: 'statusState',
  default: {
    isLoaded: false,
    isAuthed: false,
  },
});

export const profileState = atom<profile>({
  key: 'profileState',
  default: {
    uid: undefined,
    userName: undefined,
    profileImage: undefined,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAuth = (): any => {
  const [status, setStatus] = useRecoilState<status>(statusState);
  const [profile, setProfile] = useRecoilState<profile>(profileState);

  // バックエンドができるまでの仮実装
  const auth = getAuth(firebase);
  const user = auth.currentUser;

  useEffect(() => {
    if (status.isLoaded) {
      return;
    }

    fetch('/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const json = (await res.json()) as { code?: number; user?: profile };

      if (json.code !== 200) {
        setStatus({
          isLoaded: true,
          isAuthed: false,
        });
        return;
      }

      setStatus({
        isLoaded: true,
        isAuthed: true,
      });

      const user = json.user;
      setProfile({ uid: user?.uid, userName: user?.userName, profileImage: user?.profileImage });
    });

    return;
  }, [status.isAuthed]);

  return { user, status, profile, setStatus, setProfile };
};
