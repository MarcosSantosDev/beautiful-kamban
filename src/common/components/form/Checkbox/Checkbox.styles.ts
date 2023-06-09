import * as RadixCheckbox from '@radix-ui/react-checkbox';

import { styled } from '@/styles/stitches.config';

export const Root = styled(RadixCheckbox.Root, {
  all: 'unset',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderColor: '$slate6',
  borderRadius: '$1',
  '&:hover': {
    backgroundColor: '$slate3',
  },
  '&:focus': {
    boxShadow: `0 0 0 2px black`,
  },
  variants: {
    size: {
      sm: {
        width: '$4',
        height: '$4',
      },
      md: {
        width: '$6',
        height: '$6',
      },
      lg: {
        width: '$8',
        height: '$8',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const Indicator = styled(RadixCheckbox.Indicator, {
  color: '$slate11',
});

export const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
});

export const Flex = styled('div', { display: 'flex' });
