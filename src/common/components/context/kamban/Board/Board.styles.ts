import { styled } from '@/styles/stitches.config';

export const BoardContainer = styled('div', {
  display: 'flex',
  columnGap: 10,
  maxWidth: '100%',
  height: '100%',
  paddingY: '$1',
  overflowX: 'auto',
});
