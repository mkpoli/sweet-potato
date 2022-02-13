import React from 'react';
import { Flex, Box, Heading, InputGroup, Input, InputRightElement, Text } from '@chakra-ui/react';

type Props = {
  id: string;
  name: string;
  required: boolean;
  maxLength?: number;
};

const InputForm: React.FC<Props> = ({ id, name, required, maxLength }) => {
  return (
    <Box my={6}>
      <Flex align="center">
        <Heading fontSize="1em">{name}</Heading>
        {required ? (
          <Text mx={2} color="red">
            *
          </Text>
        ) : (
          ''
        )}
      </Flex>
      <InputGroup>
        <Input
          id={id}
          maxLength={maxLength}
          borderRadius="none"
          borderBottom="1px"
          borderColor="componentBg.light"
          variant="line"
          isRequired={true}
        />
        {maxLength !== undefined ? (
          <InputRightElement>
            <Text fontSize="0.8em">/{maxLength}</Text>
          </InputRightElement>
        ) : (
          <></>
        )}
      </InputGroup>
    </Box>
  );
};

export default InputForm;
