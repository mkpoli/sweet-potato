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
import { useLocale } from 'hooks/locales';

type Props = {
  index: number;
};

const Documents: React.FC<Props> = ({ index }) => {
  const { t } = useLocale();

  return (
    <Flex
      h="full"
      justify="center"
      borderRight="1px"
      borderBottom="1px"
      borderColor="componentBg.light"
    >
      <Box mt="100px" w="full">
        <Accordion px={4} w="full" defaultIndex={index}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {t.DOCUMENTS.GUIDE.TITLE}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={8}>
              <Link href="/guideline/player">
                <Box>
                  <Text>{t.DOCUMENTS.GUIDE.PLAYER.TITLE}</Text>
                </Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {t.DOCUMENTS.TAP.TITLE}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={8}>
              <Link href="/tos">
                <Box mb={4}>
                  <Text>{t.DOCUMENTS.TAP.TOS}</Text>
                </Box>
              </Link>
              <Link href="" style={{ opacity: 0.6, pointerEvents: 'none' }}>
                <Box mt={4}>
                  <Text>{t.DOCUMENTS.TAP.POLICY.PRIVACY}</Text>
                </Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default Documents;
