import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

export type status = {
  isLoaded: boolean;
  isAuthed: boolean;
};

export type profile = {
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
    userName: undefined,
    profileImage: undefined,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAuth = (): any => {
  const [status, setStatus] = useRecoilState<status>(statusState);
  const [profile, setProfile] = useRecoilState<profile>(profileState);

  useEffect(() => {
    if (status.isLoaded) {
      return;
    }
    // プロフィール読み込み
    return;
  }, [status.isLoaded]);

  return { status, profile, setStatus, setProfile };
};
