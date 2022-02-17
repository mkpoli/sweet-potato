import React from 'react';
import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';
import Link from 'components/Link';

const SideMenu: React.FC = () => {
  return (
    <Flex h="full" justify="center" borderRight="1px" borderColor="componentBg.light">
      <Box mt="100px" w="full">
        <Accordion px={4} w="full" defaultIndex={[0]}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                コンテンツ
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={8}>
              <Link href="/mypage">
                <Box>
                  <Text>譜面</Text>
                </Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default SideMenu;
