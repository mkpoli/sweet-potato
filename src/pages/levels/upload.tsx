import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocale } from 'hooks/locales';
import {
  Container,
  SimpleGrid,
  Stack,
  Box,
  Heading,
  Tag,
  AspectRatio,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import FileInputComponent from 'react-file-input-previews-base64';
import { useAuth } from 'hooks/auth';
import { client, clientLegacy } from 'framework/potato/client';
import { SonolusResourceLocator } from 'models/SRL';
import InputForm from 'components/Forms/Input';
import GenreSelect from 'components/Forms/GenreSelect';
import RateSlider from 'components/Forms/RateSlider';
import SEO from 'components/SEO';

type fileName = {
  original: string;
  uploaded: string;
};

const fileType = (logo: string, text: string): JSX.Element => {
  return (
    <Stack
      px={[6, 6, 4]}
      py={4}
      spacing={[8, 8, 4]}
      direction={['row', 'row', 'column']}
      align="center"
      bgColor="componentBg.light"
      borderRadius="base"
      textAlign="center"
    >
      <Box w={['48px']}>
        <AspectRatio ratio={1}>
          <Image
            src={logo}
            alt=""
            objectFit="cover"
            borderRadius="base"
            userSelect="none"
            pointerEvents="none"
          />
        </AspectRatio>
      </Box>
      <Box>
        <Tag p={2} bgColor="white">
          <Text fontSize="0.9em" noOfLines={1} fontWeight={700}>
            {text}
          </Text>
        </Tag>
      </Box>
    </Stack>
  );
};

const Upload: React.FC = () => {
  const router = useRouter();
  const { t } = useLocale();
  const { user, status, profile } = useAuth();

  const [cover, setCover] = useState<fileName>();
  const [bgm, setBgm] = useState<fileName>();
  const [data, setData] = useState<fileName>();

  useEffect(() => {
    if (!status.isAuthed) router.push('/');
  });

  async function handleUpload(t: SonolusResourceLocator['type'], f: File) {
    const token = await user?.getIdToken();
    const res = await client.upload.$post({
      body: {
        file: f,
        type: t,
      },
      config: { headers: { Authorization: `Bearer ${token}` } },
    });

    return {
      original: f.name,
      uploaded: `${res.filename}`,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit: any = async (e: any) => {
    e.preventDefault();

    if (
      cover?.uploaded === undefined ||
      bgm?.uploaded === undefined ||
      data?.uploaded === undefined
    ) {
      alert(t.UPLOAD_PAGE.NEED_MORE_FILE);
      return;
    }

    const tar = e.target;
    const token = await user?.getIdToken();
    const lid = Math.random().toString(32).substring(2);
    const res = await clientLegacy.levels._levelName(lid).post({
      body: {
        name: lid,
        version: 1,
        rating: Number(tar.rate.value),
        engine: 'pjsekai',
        title: { ja: tar.title.value },
        artists: { ja: tar.artists.value },
        author: { ja: tar.author.value },
        cover: {
          type: 'LevelCover',
          hash: 'temporary',
          url: `https://servers-legacy.purplepalette.net/uploads/${cover.uploaded}`,
        },
        bgm: {
          type: 'LevelBgm',
          hash: 'temporary',
          url: `https://servers-legacy.purplepalette.net/uploads/${bgm.uploaded}`,
        },
        data: {
          type: 'LevelData',
          hash: 'temporary',
          url: `https://servers-legacy.purplepalette.net/uploads/${data.uploaded}`,
        },
        genre: tar.genre.value,
        public: false,
        userId: profile.uid,
        notes: 1,
        createdTime: 1,
        updatedTime: 1,
        description: { ja: ' ' },
      },
      config: { headers: { Authorization: `Bearer ${token}` } },
    });

    if (res.status === 200) {
      router.push('/mypage');
    } else {
      alert(t.UPLOAD_PAGE.UPLOAD_FAILED);
    }
  };

  return (
    <>
      <SEO
        path="/levels/upload"
        title={t.UPLOAD_PAGE.PAGE_TITLE}
        description=""
        thumbnail=""
        allowIndex={false}
      />
      <Container>
        <Heading mt={[4, 4, 4, 4, 6]} mb={[6, 6, 6, 6, 8]} fontSize="1.4em" textAlign="center">
          {t.UPLOAD_PAGE.PAGE_TITLE}
        </Heading>

        <Box px={8} shadow="card" borderRadius="base">
          <Box my={8} pt={4} userSelect="none">
            <Heading my={2} fontSize="1em">
              {t.UPLOAD_PAGE.SELECT_FILE}
            </Heading>
            <SimpleGrid columns={[1, 1, 3]} spacing={[0, 0, 4]}>
              <Box>
                <FileInputComponent
                  labelText=""
                  imagePreview={false}
                  multiple={false}
                  accept="image/*"
                  callbackFunction={async (f: Record<string, File>) => {
                    const fileName = await handleUpload('LevelCover', f.file);
                    setCover(fileName);
                  }}
                  buttonComponent={fileType(
                    '/image.png',
                    cover?.original === undefined ? t.UPLOAD_PAGE.ARTWORK : cover.original,
                  )}
                />
              </Box>
              <Box>
                <FileInputComponent
                  labelText=""
                  imagePreview={false}
                  multiple={false}
                  accept="audio/mpeg"
                  callbackFunction={async (f: Record<string, File>) => {
                    const fileName = await handleUpload('LevelBgm', f.file);
                    setBgm(fileName);
                  }}
                  buttonComponent={fileType(
                    '/cd.png',
                    bgm?.original === undefined ? t.UPLOAD_PAGE.MUSIC_FILE : bgm.original,
                  )}
                />
              </Box>
              <Box>
                <FileInputComponent
                  labelText=""
                  imagePreview={false}
                  multiple={false}
                  accept="*"
                  callbackFunction={async (f: Record<string, File>) => {
                    const fileName = await handleUpload('LevelData', f.file);
                    setData(fileName);
                  }}
                  buttonComponent={fileType(
                    '/file.png',
                    data?.original === undefined ? t.UPLOAD_PAGE.SCORE_FILE : data.original,
                  )}
                />
              </Box>
            </SimpleGrid>
          </Box>
          <Box my={8} pb={4} userSelect="none">
            <form onSubmit={handleSubmit}>
              <InputForm id="title" name={t.FORMS.TITLE} required={true} maxLength={50} />
              <InputForm id="artists" name={t.FORMS.ARTISTS} required={true} maxLength={50} />
              <InputForm id="author" name={t.FORMS.AUTHOR} required={true} maxLength={30} />
              <GenreSelect id="genre" />
              <RateSlider id="rate" />
              <Button my={8} size="full" type="submit" color="white" bgColor="potato">
                {t.UPLOAD_PAGE.UPLOAD}
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Upload;
