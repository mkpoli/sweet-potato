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

const DashBoard: React.FC<Props> = ({ index }) => {
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
                {t.DASHBOARD.CONTENTS.MENU_TITLE}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={8}>
              <Link href="/dashboard/contents/levels">
                <Box>
                  <Text>{t.DASHBOARD.CONTENTS.LEVELS.PAGE_TITLE}</Text>
                </Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {t.DASHBOARD.SETTINGS.MENU_TITLE}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={8}>
              <Link href="/dashboard/settings/test">
                <Box>
                  <Text>{t.DASHBOARD.SETTINGS.TEST.PAGE_TITLE}</Text>
                </Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default DashBoard;
