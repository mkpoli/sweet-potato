import { useLocaleValue } from 'hooks/locales';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <div>
        <h1>{useLocaleValue({ ja: 'こんにちは', en: 'Hello' })}</h1>
      </div>
    </>
  );
};

export default Home;
