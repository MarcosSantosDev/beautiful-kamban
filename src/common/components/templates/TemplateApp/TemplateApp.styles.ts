import { templateApp } from '@/common/constants/templates';
import { styled } from '@/styles/stitches.config';

export const TemplateAppContainer = styled('div', {
  background: '$tealA2',
  height: '100vh',
  display: 'grid',
  gridTemplate: `
    "navbar navbar" ${templateApp.navbar.height}
    "sidebar child" calc(100vh - ${templateApp.navbar.height}) / ${templateApp.sidebar.width} 1fr
  `,
  alignItems: 'center',
});

export const HeaderContainer = styled('header', {
  gridArea: 'navbar',
  width: '100%',
  height: '100%',
  padding: '$4',
});

export const SidebarContainer = styled('div', {
  gridArea: 'sidebar',
  width: '100%',
  height: '100%',
  padding: '$4',
});

export const ChildContainer = styled('div', {
  gridArea: 'child',
  width: '100%',
  height: '100%',
});

export const XPTOContent = styled('div', {
  width: '100%',
  height: '100%',
  background: '$tealA6',
  borderRadius: '$4',
});
