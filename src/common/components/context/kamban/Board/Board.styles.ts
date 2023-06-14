import { templateApp } from '@/common/constants/templates';
import { styled } from '@/styles/stitches.config';

export const BoardContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  maxHeight: `calc(100vh - ${templateApp.navbar.height})`,
  maxWidth: `calc(100vw - ${templateApp.sidebar.width})`,
  marginBottom: templateApp.boadContainer.marginBottom,
  overflowX: 'auto',
});
