import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '&::-webkit-scrollbar': {
      width: '$2',
      height: '$2',
    },
    '&::-webkit-scrollbar-button': {},
    '&::-webkit-scrollbar-track': {
      backgroundColor: '$slate5',
      width: '$10',
      height: '$10',
    },
    '&::-webkit-scrollbar-track-piece': {},
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$slate8',
      boxShadow: 'inset 2px 2px 5px 0 rgba(#fff, 0.5)',
      borderRadius: '$10',
    },
    '&::-webkit-scrollbar-corner': {},
    '&::-webkit-resizer': {},
  },
  html: {
    fontSize: '62.5%',
    fontFamily: '$roboto',
    height: '100%',
  },
  body: {
    height: '100%',
  },
  li: {
    listStyle: 'none',
  },
});
