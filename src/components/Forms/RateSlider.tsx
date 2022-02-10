import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from '@chakra-ui/react';
import { useLocale } from 'hooks/locales';

type Props = {
  id: string;
};

const RateSlider: React.FC<Props> = ({ id }) => {
  const { t } = useLocale();
  const [sliderValue, setSliderValue] = React.useState(20);
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Box my={6}>
      <Flex mb={4} align="center">
        <Heading fontSize="1em">{t.FORMS.RATING}</Heading>
      </Flex>
      <Input id={id} value={sliderValue} isDisabled style={{ display: 'none' }} />
      <Slider
        defaultValue={20}
        min={1}
        max={50}
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={1} mt="1" fontSize="sm">
          1
        </SliderMark>
        <SliderMark value={15} mt="1" ml="-2.5" fontSize="sm">
          15
        </SliderMark>
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          25
        </SliderMark>
        <SliderMark value={30} mt="1" ml="-2.5" fontSize="sm">
          30
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          50
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="potato"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`Lv. ${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};

export default RateSlider;
