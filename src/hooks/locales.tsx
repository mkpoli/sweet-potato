import { useRouter } from 'next/router';
import en from 'locales/en';
import ja from 'locales/ja';
import zh from 'locales/zh';

export const useLocale = () => {
  const { locale } = useRouter();

  let t;
  switch (locale) {
    case 'en':
      t = en;
      break;
    case 'zh':
      t = zh;
      break;
    default:
      t = ja;
  }

  return { t, locale };
};

export const useLocaleValue = ({ ja, en, zh }: { ja: string; en: string; zh: string }) => {
  const { locale } = useRouter();

  let t;
  switch (locale) {
    case 'en':
      t = en;
      break;
    case 'zh':
      t = zh;
      break;
    default:
      t = ja;
  }

  return t;
};
