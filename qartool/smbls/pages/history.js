export const history = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'C1',
    width: '100vw',
    minHeight: '100%',
  },
  state: 'history',
  Layout: {
    props: {
      zIndex: 2,
      position: 'relative',
      overflow: 'unset',
    },
    Footer: null,
  },
  content: {
    HistorySlide: {
    },
    RadioSteps: {
    },
  },
  Footer: {
    width: '100%',
    maxWidth: '100vw',
    margin: 'auto - -',
  },
};