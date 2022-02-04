import * as React from 'react';
import customTheme from '../src/theme';
import {
  ChakraProvider,
  Flex,
  Link,
  Text,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { StoryContext } from '@storybook/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
};

export const globalTypes = {};

const ColorModeToggleBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const nextMode = useColorModeValue('dark', 'light');

  return (
    <Flex justify="flex-end" mb={4}>
      <Link onClick={toggleColorMode} fontSize="12px">
        <Text
          mx={{ base: 0, md: 2.5 }}
          my={{ base: 2.5, md: 0 }}
          px={{ base: 15, md: 6 }}
          py={{ base: 6, md: 4 }}
          fontSize="default"
          fontWeight="bold"
          display="block"
        >
          <Icon as={colorMode == 'light' ? FiMoon : FiSun} fontSize="1.2em" mr={3} />
          {colorMode == 'light' ? 'Dark' : 'Light'}
        </Text>
      </Link>
    </Flex>
  );
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeToggleBar />
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
