import { styled } from '@/styles/stitches.config';

export const Container = styled('div', {
  background: '$tealA2',
  height: '100vh',
  display: 'grid',
  gridTemplateAreas: '"kamban"',
});

export const KambanContainer = styled('div', {
  gridArea: 'kamban',
  padding: '$5',
  maxHeight: '100%',
});
