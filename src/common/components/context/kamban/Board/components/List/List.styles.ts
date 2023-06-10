import { styled } from '@/styles/stitches.config';

export const Wrapper = styled('div', {
  maxHeight: 'inherit',
  width: '100%',
  height: '100%',
  userSelect: 'none',
  transition: 'background-color 0.2s ease, opacity 0.1s ease',
  opacity: 'inherit',
  borderRadius: '$1',
  border: '1px solid',
  borderColor: '$slate8',
  background: '$slate3',
  variants: {
    isDraggingOver: {
      true: {
        backgroundColor: '$tealA3',
      },
    },
    isDraggingFrom: {
      true: {
        backgroundColor: '$tealA3',
      },
    },
    isDropDisabled: {
      true: {
        opacity: '0.5',
      },
    },
  },
});

export const ScrollContainer = styled('div', {
  width: '100%',
  height: '100%',
  overflowY: 'hidden',
  paddingLeft: '$3',
  paddingRight: '$1',
  scrollbarWidth: '$2',
  scrollbarGutter: 'stable',
  '&:hover': {
    overflowY: 'auto',
  },
});

export const DropZone = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  minHeight: '100%',
  paddingY: '$3',
});
