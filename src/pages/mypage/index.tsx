import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocale } from 'hooks/locales';
import {
  useClipboard,
  Container,
  SimpleGrid,
  AspectRatio,
  Image,
  Box,
  Heading,
  Text,
  Skeleton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiCopy } from 'react-icons/fi';
import { useAuth } from 'hooks/auth';
import { client } from 'framework/potato/client';
import { Level } from 'models/Level';

const MyPage: React.FC = () => {
  const [testURL, setTestURL] = useState<string>();
  const [levels, setLevels] = useState<Level[]>([]);
  const router = useRouter();
  const { t } = useLocale();
  const { user, status, profile } = useAuth();
  const { onCopy } = useClipboard(`${testURL}`);

  useEffect(() => {
    if (!status.isAuthed) router.push('/');
    if (levels.length !== 0) return;

    // バックエンドができるまでの仮実装
    async function callAPI() {
      const token = await user?.getIdToken();
      console.log(token);

      const me = await client.users
        ._userId(profile.uid)
        .$get({ config: { headers: { Authorization: `Bearer ${token}` } } });
      setTestURL(`${process.env.API_URL}/test/${me.testId}`);

      const uploaded = await client.users
        ._userId(profile.uid)
        .levels.list.$get({ config: { headers: { Authorization: `Bearer ${token}` } } });
      setLevels(uploaded.items);
    }
    callAPI();
  });

  return (
    <>
      <Container>
        <Heading mt={[4, 4, 4, 4, 6]} mb={[6, 6, 6, 6, 8]} fontSize="1.4em" textAlign="center">
          {t.HEADER.MYPAGE}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing={10}>
          <Box p={4} shadow="card" borderRadius="base" userSelect="none">
            <Skeleton isLoaded={levels.length !== 0}>
              <Flex>
                <Heading my={2} fontSize="1em">
                  {t.MY_PAGE.YOUR_TEST_SERVER}
                </Heading>
                <Spacer />
                <Button
                  leftIcon={<FiCopy />}
                  size="xs"
                  color="white"
                  bgColor="potato"
                  onClick={onCopy}
                >
                  {t.MY_PAGE.COPY}
                </Button>
              </Flex>

              <Text my={2} fontSize="0.8em" color="potato">
                {testURL}
              </Text>
            </Skeleton>
          </Box>

          <Box p={4} shadow="card" borderRadius="base" userSelect="none">
            <Skeleton isLoaded={levels.length !== 0}>
              <Flex>
                <Heading my={2} fontSize="1em">
                  {t.MY_PAGE.PROFILE}
                </Heading>
                <Spacer />
                <Button
                  leftIcon={<FiEdit />}
                  size="xs"
                  color="white"
                  bgColor="potato"
                  isDisabled
                  _hover={{}}
                >
                  {t.MY_PAGE.EDIT}
                </Button>
              </Flex>
            </Skeleton>
          </Box>
        </SimpleGrid>

        <Box
          my={8}
          p={4}
          shadow="card"
          borderRadius="base"
          style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}
        >
          <Skeleton isLoaded={levels.length !== 0}>
            <Table>
              <Thead>
                <Tr>
                  <Th>{t.MY_PAGE.ARTWORK}</Th>
                  <Th>{t.MY_PAGE.TITLE}</Th>
                  <Th>{t.MY_PAGE.ACTION}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {levels.map((level: Level) => (
                  <Tr key={level.name}>
                    <Td>
                      <Box w="120px">
                        <AspectRatio ratio={1}>
                          <Image
                            src={`${process.env.API_URL}${level.cover.url}`}
                            alt=""
                            objectFit="cover"
                            borderRadius="base"
                            userSelect="none"
                            pointerEvents="none"
                          />
                        </AspectRatio>
                      </Box>
                    </Td>
                    <Td>
                      <Text>{level.title}</Text>
                    </Td>
                    <Td>
                      <SimpleGrid spacing={4}>
                        <Button
                          leftIcon={<FiEdit />}
                          color="white"
                          bgColor="potato"
                          isDisabled
                          _hover={{}}
                        >
                          {t.MY_PAGE.EDIT}
                        </Button>
                        <Button
                          leftIcon={<FiTrash2 />}
                          color="white"
                          bgColor="potato"
                          isDisabled
                          _hover={{}}
                        >
                          {t.MY_PAGE.DELETE}
                        </Button>
                      </SimpleGrid>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Skeleton>
        </Box>
      </Container>
    </>
  );
};

export default MyPage;
