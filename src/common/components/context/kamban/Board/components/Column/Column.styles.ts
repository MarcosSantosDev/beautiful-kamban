import { templateApp } from '@/common/constants/templates';
import { styled, theme } from '@/styles/stitches.config';

const { navbar, boadContainer } = templateApp;

const boadContainerSpaces = `calc($4 + ${boadContainer.marginBottom})`;

const columnHead = `${theme.sizes[12]}`;
const columnFoot = `${theme.sizes[12]}`;
const columnMarginBottom = `${theme.sizes[4]}`;
const columnList = `calc((100vh - ${navbar.height}) - (${columnHead} + ${columnFoot} + ${boadContainerSpaces}))`;

export const ContainerColumn = styled('div', {
  display: 'grid',
  gridTemplateColumns: '300px',
  gridTemplateRows: `${columnHead} ${columnList} ${columnFoot}`,
  backgroundColor: '$slate1',
  border: '1px solid',
  borderRadius: '$4',
  borderColor: '$slate4',
  marginBottom: columnMarginBottom,
});

export const ContainerHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  paddingX: '$3',
});

export const Title = styled('p', {
  fontWeight: 'normal',
  fontSize: '$4',
  color: '$slate9',
});

export const HeadActionsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$4',
  width: '100%',
  height: '100%',
  '& svg': {
    width: '$4',
    height: '$4',
    color: '$slate9',
  },
});

export const CountPresentation = styled('div', {
  span: {
    color: '$slate9',
  },
});

export const ContainerFooter = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
  width: '100%',
  height: '100%',
});

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
  width: '100%',
  height: '100%',
  border: '0',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  '& span': {
    color: '$slate9',
  },
  '& svg': {
    width: '$5',
    height: '$5',
    color: '$slate9',
  },
});
