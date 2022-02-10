import React from 'react';
import { Flex, Box, Select, Heading } from '@chakra-ui/react';
import { useLocale } from 'hooks/locales';

type Props = {
  id: string;
};

const GenreSelect: React.FC<Props> = ({ id }) => {
  const { t } = useLocale();

  return (
    <Box my={6}>
      <Flex mb={4} align="center">
        <Heading fontSize="1em">{t.FORMS.GENRE}</Heading>
      </Flex>
      <Select id={id}>
        <option value="general" selected>
          {t.GENRE.GENERAL}
        </option>
        <option value="jpop">{t.GENRE.JPOP}</option>
        <option value="anime">{t.GENRE.ANIME}</option>
        <option value="vocaloid">{t.GENRE.VOCALOID}</option>
      </Select>
    </Box>
  );
};

export default GenreSelect;
