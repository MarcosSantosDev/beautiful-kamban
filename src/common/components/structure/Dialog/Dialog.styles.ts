import * as Dialog from '@radix-ui/react-dialog';
import { keyframes } from '@stitches/react';

import { styled } from '@/styles/stitches.config';

export const overlayShow = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$blackA9',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  borderRadius: '$3',
  width: '90vw',
  maxHeight: '90vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': {
    outline: 'none',
  },
  variants: {
    size: {
      small: {
        maxWidth: '450px',
      },
      medium: {
        maxWidth: '800px',
      },
      xLarge: {
        maxWidth: '100%',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export const IconButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',
  top: 10,
  right: 10,
  borderRadius: '100%',
  height: '$8',
  width: '$8',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$tealA11',
  '&:hover': {
    backgroundColor: '$tealA4',
  },
  '&:focus': {
    boxShadow: `0 0 0 2px $tealA4`,
  },
  svg: {
    height: '$5',
    width: '$5',
  },
});
