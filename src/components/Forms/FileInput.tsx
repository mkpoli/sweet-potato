import { Stack, Box, Tag, AspectRatio, Image, Text } from '@chakra-ui/react';
import FileInputComponent from 'react-file-input-previews-base64';

type Props = {
  image: string;
  text: string;
  acceptType: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: any;
};

const FileInput: React.FC<Props> = ({ image, text, acceptType, callback }) => {
  return (
    <FileInputComponent
      labelText=""
      imagePreview={false}
      multiple={false}
      accept={acceptType}
      callbackFunction={callback}
      buttonComponent={
        <Stack
          px={[6, 6, 4]}
          py={4}
          spacing={[8, 8, 4]}
          direction={['row', 'row', 'column']}
          align="center"
          bgColor="componentBg.light"
          borderRadius="base"
          textAlign="center"
          _hover={{ transform: 'translate(0, 3px)', transitionDuration: '0.1s' }}
        >
          <Box w={['48px']}>
            <AspectRatio ratio={1}>
              <Image
                src={image}
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
      }
    />
  );
};

export default FileInput;
