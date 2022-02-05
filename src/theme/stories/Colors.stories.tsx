import React from 'react';
import { useClipboard, Container, Wrap, WrapItem, Tooltip, Box } from '@chakra-ui/react';
import colors from '../foundations/colors';

export default {
  title: 'Theme/Colors',
};

const ColorGrid: React.FC<{
  color: string;
}> = ({ color }) => {
  const { onCopy } = useClipboard(color);

  return (
    <WrapItem onClick={onCopy}>
      <Tooltip label={color} aria-label={color}>
        <Box bgColor={color} boxSize="120px"></Box>
      </Tooltip>
    </WrapItem>
  );
};

export const List = (): JSX.Element => {
  const colorNames = Object.keys(colors)
    .map((data: string) => {
      if (typeof colors[data] === 'string') return data;
      return Object.keys(colors[data]).map((name) => `${data}.${name}`);
    })
    .flat();

  return (
    <Container textAlign="center" fontWeight="bold" p={16}>
      <Wrap spacing={0}>
        {colorNames.map(
          (name: string): JSX.Element => (
            <Box key={name}>
              <ColorGrid color={name} />
            </Box>
          ),
        )}
      </Wrap>
    </Container>
  );
};
