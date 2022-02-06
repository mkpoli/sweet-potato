import { useRouter } from 'next/router';
import en from 'locales/en';
import ja from 'locales/ja';

export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ja;
  return { t, locale };
};

export const useLocaleValue = ({ ja, en }: { ja: string; en: string }) => {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ja;
  return t;
};
