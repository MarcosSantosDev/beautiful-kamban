import { templateApp } from '@/common/constants/templates';
import { styled } from '@/styles/stitches.config';

export const ContainerColumn = styled('div', {
  $$contentWithoutNavbarHeight: `(100vh - ${templateApp.navbar.height})`,
  display: 'grid',
  gridTemplateColumns: '300px',
  gridTemplateRows: `$10 calc($$contentWithoutNavbarHeight - ($10 + $10))`,
  rowGap: '$3',
});

export const ContainerHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  paddingX: '$3',
  background: '$white',
  borderRadius: '$1',
  borderTop: '2px solid',
  borderTopColor: '$tealA10',
});

export const Heading2 = styled('h2', {
  fontWeight: 500,
  fontSize: '$3',
  color: '$tealA11',
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
