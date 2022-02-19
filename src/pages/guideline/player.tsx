import React from 'react';
import { useLocale } from 'hooks/locales';
import { Container, Flex, Heading, Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { FcMusic } from 'react-icons/fc';
import SEO from 'components/SEO';
import SideMenu from 'components/SideMenu/Documents';

const Home: React.FC = () => {
  const { t } = useLocale();

  return (
    <>
      <SEO
        path="/guideline/player"
        title={`${t.DOCUMENTS.GUIDE.PLAYER.TITLE}${t.DOCUMENTS.GUIDE.TITLE}`}
        description={t.DOCUMENTS.GUIDE.PLAYER.DESCRIPTION}
        thumbnail=""
        allowIndex={true}
      />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(4, 1fr)', '2xl': 'repeat(5, 1fr)' }}
      >
        <GridItem colSpan={1}>
          <SideMenu index={0} />
        </GridItem>
        <GridItem mx={{ base: 0, xl: 8 }} colSpan={{ base: 1, xl: 3, '2xl': 4 }}>
          <Container variant="dashboard">
            <Flex mt={4} mb={12} align="center" gap={2}>
              <Box fontSize="2em">
                <FcMusic />
              </Box>
              <Heading fontSize="1.4em">{t.DOCUMENTS.GUIDE.PLAYER.TITLE}</Heading>
            </Flex>
            <Box>
              <Heading my={4} fontSize="1.2em">
                {t.DOCUMENTS.GUIDE.PLAYER.MEDIA.TITLE}
              </Heading>
              {t.DOCUMENTS.GUIDE.PLAYER.MEDIA.TEXT.map((text: string) => (
                <Text key={text} my={2}>
                  {text}
                </Text>
              ))}
            </Box>
          </Container>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
