import { useRouter } from 'next/router';
import en from 'locales/en';
import ja from 'locales/ja';
import zh from 'locales/zh';
import kr from 'locales/kr';

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
    case 'kr':
      t = kr;
      break;
    default:
      t = ja;
  }

  return { t, locale };
};

export const useLocaleValue = ({
  ja,
  en,
  zh,
  kr,
}: {
  ja: string;
  en: string;
  zh: string;
  kr: string;
}) => {
  const { locale } = useRouter();

  let t;
  switch (locale) {
    case 'en':
      t = en;
      break;
    case 'zh':
      t = zh;
      break;
    case 'kr':
      t = kr;
      break;
    default:
      t = ja;
  }

  return t;
};
