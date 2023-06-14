import { styled } from '@/styles/stitches.config';

export const CardContainer = styled('li', {
  position: 'relative',
  height: 'fit-content',
  backgroundColor: '$white',
  borderRadius: '$3',
  boxShadow: '0 0 2px 0 rgba(192, 208, 230, 0.8)',
  '&:hover': {
    boxShadow: '0 0 4px 0 rgba(192, 208, 230, 0.8)',
  },
});

export const CardHeader = styled('header', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$2',
  borderBottom: '1px solid',
  borderColor: '$slate6',
  paddingY: '$3',
  paddingLeft: '$3',
  maxWidth: '100%',
});

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  paddingX: '$2',
  paddingY: '$4',
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
    color: '$slate9',
  },
});

export const DetailsContent = styled('div', {
  gridArea: 'detailsContent',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$1',
});

export const CardFooter = styled('footer', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$2',
  borderTop: '1px solid',
  borderColor: '$slate6',
  paddingY: '$3',
  paddingRight: '$3',
  maxWidth: '100%',
});

export const FooterContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  gap: '$1',
  svg: {
    color: '$slate9',
  },
  span: {
    color: '$slate9',
    fontSize: '$3',
  },
});

// Typograph
export const Heading = styled('h3', {
  fontSize: '$3',
  fontWeight: '500',
  color: '$slate9',
});

export const DetailsHeading = styled('h3', {
  fontSize: '$3',
  fontWeight: 'bold',
  color: '$slate9',
});

export const DetailsParagraph = styled('p', {
  fontSize: '$3',
  color: '$slate9',
});
