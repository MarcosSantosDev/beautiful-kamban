import { styled } from '@/styles/stitches.config';

export const ListContainer = styled('div', {
  height: '100%',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  rowGap: 10,
  flex: '0 0 300px',
});

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingX: '$2',
  paddingY: '$2',
  height: 'min-content',
  background: '$white',
  borderRadius: '$1',
  borderTop: '2px solid',
  borderTopColor: '$tealA10',
});

export const Heading2 = styled('h2', {
  fontWeight: 500,
  fontSize: '$3',
  color: '$tealA10',
});

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$6',
  height: '$6',
  borderRadius: '$circle',
  backgroundColor: '$tealA10',
  border: '0',
  cursor: 'pointer',

  '& svg': {
    width: '$5',
    height: '$5',
    color: 'white',
  },
});

export const UlList = styled('ul', {
  background: '$tealA2',
  border: '1px solid',
  borderColor: '$tealA5',
  borderRadius: '$1',
  paddingY: '$3',
  paddingLeft: '$3',
  paddingRight: '$1',
  maxHeight: '100%',
  height: '100%',
  overflowY: 'hidden',
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  '&:hover': {
    overflowY: 'auto',
  },
});
