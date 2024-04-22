export const RadioSteps = {
  extend: [
    'Flex',
  ],
  props: {
    gap: 'Z',
    padding: 'C B2',
    width: '100%',
    maxWidth: 'J1',
    overflow: 'auto hidden',
    margin: 'auto auto -',
  },
  childExtend: {
    extend: 'RadioStep',
    props: (el, s) => ({
          whiteSpace: 'nowrap',
          RadioMark: {
            isActive: s.parent.activeSlide === parseInt(el.key),
          },
          Caption: {
            text: '{{ age }}',
          },
          '& progress': {
            opacity: '0.25',
          },
          ':last-child': {
            '& progress': {
              hide: true,
            },
          },
          onClick: (ev, el, s) => s.parent.update({
            activeSlide: parseInt(el.key)
          })
        }),
  },
  $stateCollection: ({
        state
      }) => state.data,
};