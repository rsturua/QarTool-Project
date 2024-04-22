export const HistorySlide = {
  extend: 'Flex',
  props: {
    flow: 'y',
    maxWidth: '100vw',
    gap: 'D',
  },
  Flex: {
    props: {
      flow: 'x',
      align: 'stretch space-between',
      maxWidth: '100%',
      width: '100%',
      gap: 'D1',
      overflow: 'auto hidden',
      padding: 'D1',
      style: {
        scrollSnapType: 'x mandatory',
      },
    },
    childExtend: {
      extend: 'History',
    },
    $stateCollection: ({
          state
        }) => state.data,
  },
};