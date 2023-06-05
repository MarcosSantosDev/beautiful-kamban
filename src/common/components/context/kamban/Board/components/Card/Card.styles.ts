import { styled } from '@/styles/stitches.config';

export const CardContainer = styled('li', {
  position: 'relative',
  backgroundColor: '$white',
  borderRadius: '$1',
  marginBottom: '$3',
  '&:hover': {
    boxShadow: '0 0 6px 0 rgba(192, 208, 230, 0.8)',
  },
});

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingX: '$2',
  paddingY: '$1',
  maxWidth: '100%',
  background: '$slate4',
});

export const Content = styled('div', {
  display: 'block',
  paddingX: '$2',
  paddingY: '$4',
});

export const Paragraph = styled('p', {
  fontWeight: 500,
});
