export const history = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'C1',
    width: '100vw',
    minHeight: '100%',
  },
  state: (el) => ({
        ...el.parent.state.history,
        activeSlide: 0,
      }),
  Layout: {
    props: {
      zIndex: 19,
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