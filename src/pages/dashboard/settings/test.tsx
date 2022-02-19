import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocale } from 'hooks/locales';
import {
  useClipboard,
  Container,
  Box,
  Heading,
  Text,
  Skeleton,
  Button,
  Flex,
  Spacer,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { FiCopy } from 'react-icons/fi';
import { FcIdea } from 'react-icons/fc';
import { useAuth } from 'hooks/auth';
import { clientLegacy } from 'framework/potato/client';
import Link from 'components/Link';
import SEO from 'components/SEO';
import SideMenu from 'components/SideMenu/DashBoard';

const Test: React.FC = () => {
  const [testURL, setTestURL] = useState<string>();
  const router = useRouter();
  const { t } = useLocale();
  const { user, status, profile } = useAuth();
  const { onCopy } = useClipboard(`${testURL}`);

  useEffect(() => {
    if (!status.isAuthed) router.push('/');

    // バックエンドができるまでの仮実装
    async function callAPI() {
      const token = await user?.getIdToken();

      const me = await clientLegacy.users
        ._userId(profile.uid)
        .$get({ config: { headers: { Authorization: `Bearer ${token}` } } });

      setTestURL(`${process.env.API_URL}/test/${me.testId}`);
    }
    callAPI();
  });

  return (
    <>
      <SEO
        path="/dashboard/settings/test"
        title={t.DASHBOARD.SETTINGS.TEST.PAGE_TITLE}
        description=""
        thumbnail=""
        allowIndex={false}
      />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(4, 1fr)', '2xl': 'repeat(5, 1fr)' }}
      >
        <GridItem colSpan={1}>
          <SideMenu index={1} />
        </GridItem>
        <GridItem mx={{ base: 0, xl: 8 }} colSpan={{ base: 1, xl: 3, '2xl': 4 }}>
          <Container variant="dashboard">
            <Heading mt={[4, 4, 4, 4, 6]} mb={[6, 6, 6, 6, 8]} fontSize="1.4em">
              {t.DASHBOARD.SETTINGS.TEST.PAGE_TITLE}
            </Heading>
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                xl: 'repeat(5, 1fr)',
                '2xl': 'repeat(3, 1fr)',
              }}
              gap={[6, 6, 6, 8]}
            >
              <GridItem colSpan={{ base: 1, xl: 3, '2xl': 2 }}>
                <Skeleton isLoaded={testURL !== undefined}>
                  <Flex>
                    <Heading my={2} fontSize="1em">
                      {t.DASHBOARD.SETTINGS.TEST.TEST_URL}
                    </Heading>
                    <Spacer />
                    <Button
                      leftIcon={<FiCopy />}
                      size="xs"
                      color="white"
                      bgColor="potato"
                      onClick={onCopy}
                    >
                      {t.DASHBOARD.SETTINGS.TEST.COPY}
                    </Button>
                  </Flex>

                  <Text my={2} fontSize="0.9em" color="potato">
                    {testURL}
                  </Text>
                </Skeleton>
              </GridItem>
              <GridItem colSpan={{ base: 1, xl: 2, '2xl': 1 }}>
                <Flex mb={4} align="center" gap={2}>
                  <Box fontSize="2.2em">
                    <FcIdea />
                  </Box>
                  <Heading fontSize="1.4em">Hint</Heading>
                </Flex>
                <Box>
                  <UnorderedList>
                    <Link href="https://wiki.purplepalette.net/play-charts/add-server" isExternal>
                      <ListItem color="potato">サーバーの登録</ListItem>
                    </Link>
                  </UnorderedList>
                </Box>
              </GridItem>
            </Grid>
          </Container>
        </GridItem>
      </Grid>
    </>
  );
};

export default Test;
