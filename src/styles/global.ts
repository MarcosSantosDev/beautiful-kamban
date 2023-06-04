import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  'html': {
    fontSize: '62.5%',
    fontFamily: '$roboto'
  },
  '*': {
    margin: 0,
    padding: 0
  },
  'li': {
    listStyle: 'none'
  }
})
