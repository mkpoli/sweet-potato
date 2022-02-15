import React from 'react';
import { ListItem, ListIcon, Flex, Box, Heading, Text, Button } from '@chakra-ui/react';
import { FcCheckmark } from 'react-icons/fc';
import { useLocale } from 'hooks/locales';

type Props = {
  text: string;
  fileName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
};

const FileList: React.FC<Props> = ({ text, fileName, onClick }) => {
  const { t } = useLocale();

  return (
    <ListItem>
      <Flex maxW="full" align="center">
        <ListIcon as={FcCheckmark} fontSize="1.4em" />
        <Box mx={2}>
          <Heading fontSize="1em">{text}</Heading>
          <Text fontSize="0.9em" color="potato" style={{ overflowWrap: 'anywhere' }}>
            {fileName}
          </Text>
        </Box>
        <Box mx={2}>
          <Button size="xs" color="white" bgColor="potato" onClick={onClick}>
            {t.FILE_LIST.CHANGE}
          </Button>
        </Box>
      </Flex>
    </ListItem>
  );
};

export default FileList;
