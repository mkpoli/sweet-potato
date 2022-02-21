import React from 'react';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from 'components/Link';
import { useLocale, useLocaleValue } from 'hooks/locales';

const WikiLink: React.FC<{ path: string; text: string }> = ({ path, text }) => {
  const { locale } = useLocale();
  const host =
    locale === 'ja' ? 'https://wiki.purplepalette.net' : 'https://wiki-en.purplepalette.net';
  const url = host + path;

  return (
    <Link href={url} isExternal color="potato" fontWeight={700}>
      {text}
    </Link>
  );
};

const UploadGuide: React.FC = () => {
  const { t } = useLocale();

  return (
    <Box px={8} border="2px" borderColor="componentBg.light" borderRadius="base">
      <Box my={8}>
        <Box my={8}>
          <Heading my={4} fontSize="1.1em">
            {t.UPLOAD_GUIDE.UPLOAD_GUIDELINE}
          </Heading>
          <UnorderedList>
            <ListItem>
              <Link href="/tos" isExternal color="potato" fontWeight={700}>
                {t.DOCUMENTS.TAP.TOS}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://potato.purplepalette.net/help/publish-fumen-rules"
                isExternal
                color="potato"
                fontWeight={700}
              >
                {useLocaleValue({
                  ja: '投稿ガイドライン',
                  en: 'Upload Guideline',
                  zh: 'Upload Guideline',
                  kr: 'Upload Guideline',
                })}
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box my={8}>
          <Heading my={4} fontSize="1.1em">
            {t.UPLOAD_GUIDE.CREATE_CHARTS}
          </Heading>

          <UnorderedList>
            <ListItem>
              <WikiLink
                path="/create-charts/required-things"
                text={useLocaleValue({
                  ja: '必要なもの',
                  en: 'Required Things',
                  zh: 'Required Things',
                  kr: 'Required Things',
                })}
              />
            </ListItem>
            <ListItem>
              <WikiLink
                path="/create-charts/copyrights"
                text={useLocaleValue({
                  ja: '著作権',
                  en: 'Copyrights',
                  zh: 'Copyrights',
                  kr: 'Copyrights',
                })}
              />
            </ListItem>
            <ListItem>
              <WikiLink
                path="/create-charts/editor"
                text={useLocaleValue({
                  ja: '制作ツール',
                  en: 'Chart Editor',
                  zh: 'Chart Editor',
                  kr: 'Chart Editor',
                })}
              />
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadGuide;
