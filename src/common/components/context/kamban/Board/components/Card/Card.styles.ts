import { styled } from '@/styles/stitches.config';

export const CardContainer = styled('li', {
  position: 'relative',
  height: 'fit-content',
  backgroundColor: '$white',
  borderRadius: '$1',
  '&:hover': {
    boxShadow: '0 0 6px 0 rgba(192, 208, 230, 0.8)',
  },
});

export const CardHeader = styled('header', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingX: '$2',
  paddingY: '$1',
  maxWidth: '100%',
  background: '$slate6',
});

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  paddingX: '$2',
  paddingY: '$4',
});

export const Heading = styled('h3', {
  fontSize: '$3',
  fontWeight: '500',
});

export const DetailsContainer = styled('div', {
  display: 'grid',
  gridTemplate: `
    "iconContent detailsContent" auto / 20px 1fr
  `,
  alignItems: 'flex-start',
  columnGap: '$1',
});

export const DetailsList = styled('ul', {
  display: 'grid',
  rowGap: '$2',
});

export const DetailsItem = styled('li', {
  display: 'grid',
  gridTemplate: `
    "iconContent detailsContent" auto / 20px 1fr
  `,
  alignItems: 'flex-start',
  columnGap: '$1',
});

export const IconContent = styled('div', {
  gridArea: 'iconContent',
  display: 'flex',
  justifyContent: 'center',
  svg: {
    color: '$slate11',
  },
});

export const DetailsContent = styled('div', {
  gridArea: 'detailsContent',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$1',
});

export const DetailsHeading = styled('h3', {
  fontSize: '$3',
  fontWeight: 'bold',
  color: '$slate11',
});

export const DetailsParagraph = styled('p', {
  fontSize: '$3',
  color: '$slate12',
});
