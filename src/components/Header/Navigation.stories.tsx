import React, { useEffect } from 'react';
import HeaderNav from 'components/Header/Navigation';
import { useAuth } from 'hooks/auth';

export default { title: 'Header/Navigation' };

export const loading = () => {
  return <Loading />;
};

const Loading: React.FC = () => {
  const { setStatus } = useAuth();

  useEffect(() => {
    setStatus({ isLoaded: false, isAuthed: false });
  });

  return <HeaderNav />;
};

export const loaded = () => {
  return <Loaded />;
};

const Loaded: React.FC = () => {
  const { setStatus } = useAuth();

  useEffect(() => {
    setStatus({ isLoaded: true, isAuthed: false });
  });

  return <HeaderNav />;
};

export const authed = () => {
  return <Authed />;
};

const Authed: React.FC = () => {
  const { setStatus, setProfile } = useAuth();

  useEffect(() => {
    setStatus({ isLoaded: true, isAuthed: true });
    setProfile({
      uid: 'unique_id',
      userName: 'テストABC123#$%',
      profileImage: 'https://via.placeholder.com/150',
    });
  });

  return <HeaderNav />;
};
