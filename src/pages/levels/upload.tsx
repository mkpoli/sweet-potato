import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocale } from 'hooks/locales';
import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Button,
  Grid,
  GridItem,
  List,
} from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';
import { clientLegacy } from 'framework/potato/client';
import UploadGuide from 'components/Card/UploadGuide';
import InputForm from 'components/Forms/Input';
import GenreSelect from 'components/Forms/GenreSelect';
import RateSlider from 'components/Forms/RateSlider';
import FileInput from 'components/Forms/FileInput';
import SEO from 'components/SEO';
import FileList from 'components/Forms/FileList';

type fileName = {
  original: string;
  uploaded: string;
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

  async function handleUpload(type: string, f: File) {
    if (type == 'LevelData' && !f.name.endsWith('.sus')) {
      alert(t.UPLOAD_ERROR.NOT_SUS);
      return;
    }

    const token = await user?.getIdToken();
    const res = await clientLegacy.upload.$post({
      body: {
        file: f,
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
      alert(t.UPLOAD_ERROR.NEED_MORE_FILE);
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
      router.push('/dashboard/contents/levels');
    } else {
      alert(t.UPLOAD_ERROR.OTHER);
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

        <Grid my={8} templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem colSpan={1}>
            <UploadGuide />
          </GridItem>
          <GridItem colSpan={{ base: 1, xl: 2 }}>
            <Box px={8} border="2px" borderColor="componentBg.light" borderRadius="base">
              <Box my={2} pt={4} userSelect="none">
                <Heading my={2} fontSize="1em">
                  {t.UPLOAD_PAGE.SELECT_FILE}
                </Heading>
                <SimpleGrid columns={[1, 1, 3]} spacing={[0, 0, 4]}>
                  <Box style={{ display: cover?.uploaded === undefined ? 'block' : 'none' }}>
                    <FileInput
                      image="/image.png"
                      text={t.UPLOAD_PAGE.ARTWORK}
                      acceptType="image/jpeg, image/png"
                      callback={async (f: Record<string, File>) => {
                        const fileName = await handleUpload('LevelCover', f.file);
                        setCover(fileName);
                      }}
                    />
                  </Box>
                  <Box style={{ display: bgm?.uploaded === undefined ? 'block' : 'none' }}>
                    <FileInput
                      image="/cd.png"
                      text={t.UPLOAD_PAGE.MUSIC_FILE}
                      acceptType="audio/mpeg"
                      callback={async (f: Record<string, File>) => {
                        const fileName = await handleUpload('LevelBgm', f.file);
                        setBgm(fileName);
                      }}
                    />
                  </Box>
                  <Box style={{ display: data?.uploaded === undefined ? 'block' : 'none' }}>
                    <FileInput
                      image="/file.png"
                      text={t.UPLOAD_PAGE.SCORE_FILE}
                      acceptType="*"
                      callback={async (f: Record<string, File>) => {
                        const fileName = await handleUpload('LevelData', f.file);
                        setData(fileName);
                      }}
                    />
                  </Box>
                </SimpleGrid>

                <List my={4} spacing={3}>
                  {cover?.uploaded !== undefined ? (
                    <FileList
                      text={t.UPLOAD_PAGE.ARTWORK}
                      fileName={cover.original}
                      onClick={() => {
                        setCover(undefined);
                      }}
                    />
                  ) : undefined}
                  {bgm?.uploaded !== undefined ? (
                    <FileList
                      text={t.UPLOAD_PAGE.MUSIC_FILE}
                      fileName={bgm.original}
                      onClick={() => {
                        setBgm(undefined);
                      }}
                    />
                  ) : undefined}
                  {data?.uploaded !== undefined ? (
                    <FileList
                      text={t.UPLOAD_PAGE.SCORE_FILE}
                      fileName={data.original}
                      onClick={() => {
                        setData(undefined);
                      }}
                    />
                  ) : undefined}
                </List>
              </Box>
              <Box my={2} pb={4} userSelect="none">
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
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Upload;
