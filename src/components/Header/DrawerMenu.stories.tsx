import React, { useEffect } from 'react';
import DrawerMenu from 'components/Header/DrawerMenu';
import { useAuth } from 'hooks/auth';

export default { title: 'Header/DrawerMenu' };

export const loading = () => {
  return <Loading />;
};

const Loading: React.FC = () => {
  const { setStatus } = useAuth();

  useEffect(() => {
    setStatus({ isLoaded: false, isAuthed: false });
  });

  return <DrawerMenu />;
};

loading.story = {
  parameters: {
    screenshot: {
      click: '#drawer',
    },
  },
};

export const loaded = () => {
  return <Loaded />;
};

const Loaded: React.FC = () => {
  const { setStatus } = useAuth();

  useEffect(() => {
    setStatus({ isLoaded: true, isAuthed: false });
  });

  return <DrawerMenu />;
};

loaded.story = {
  parameters: {
    screenshot: {
      click: '#drawer',
    },
  },
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

  return <DrawerMenu />;
};

authed.story = {
  parameters: {
    screenshot: {
      click: '#drawer',
    },
  },
};
