import { styled } from '@/styles/stitches.config';

export const PriorityTagContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  background: 'black',
  color: '$white',
  paddingY: '$1',
  paddingX: '$2',
  borderRadius: '$10',
  width: 'fit-content',
  variants: {
    low: {
      true: {
        background: 'lightgreen',
        color: 'black',
      },
    },
    average: {
      true: {
        background: 'yellow',
        color: 'black',
      },
    },
    high: {
      true: {
        background: 'red',
        color: 'white',
      },
    },
  },
});

export const Text = styled('span', {
  fontSize: '$2',
  fontWeight: 'bold',
});
