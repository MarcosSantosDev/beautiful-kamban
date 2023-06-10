import { templateApp } from '@/common/constants/templates';
import { styled } from '@/styles/stitches.config';

export const BoardContainer = styled('div', {
  maxHeight: `calc(100vh - ${templateApp.navbar.height})`,
  maxWidth: `calc(100vw - ${templateApp.sidebar.width})`,
  paddingX: '$4',
  paddingY: '$3',
  display: 'flex',
  gap: '$4',
  overflowX: 'auto',
});
