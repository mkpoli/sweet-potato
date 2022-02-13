import * as React from 'react';
import theme from '../src/theme';
import { ChakraProvider, Flex, Link, Text, Icon, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { RecoilRoot } from 'recoil';
import { withScreenshot } from 'storycap';
import { withNextRouter } from '@gogaille/storybook-addon-next-router';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
  screenshot: {
    fullPage: false,
    viewports: {
      '4K': {
        width: 3840,
        height: 2160,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      },
      FHD: {
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      },
      'M1 Mac': {
        width: 1440,
        height: 810,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      },
      HD: {
        width: 1280,
        height: 720,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      },
      'iPhone 13 Mini': {
        width: 375,
        height: 812,
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        isLandscape: false,
      },
      'iPhone 13 Pro': {
        width: 390,
        height: 844,
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        isLandscape: false,
      },
      iPad: {
        width: 768,
        height: 1024,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        isLandscape: false,
      },
      'iPad Pro': {
        width: 1024,
        height: 1366,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        isLandscape: false,
      },
    },
  },
};

export const globalTypes = {};

const ColorModeToggleBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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

const withChakra = (StoryFn: Function) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeToggleBar />
      <StoryFn />
    </ChakraProvider>
  );
};

const withRecoil = (StoryFn: Function) => {
  return React.createElement(RecoilRoot, {}, StoryFn());
};

export const decorators = [withNextRouter, withRecoil, withChakra, withScreenshot];
