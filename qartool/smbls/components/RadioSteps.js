export const RadioSteps = {
  extend: [
    'Flex',
  ],
  props: {
    gap: 'Z',
    padding: 'C E1',
    width: '100%',
    overflow: 'auto hidden',
    margin: 'auto auto -',
  },
  childExtend: {
    extend: 'RadioStep',
    props: (el, s) => ({
          whiteSpace: 'nowrap',
          isActive: s.parent.activeSlide === parseInt(el.key),

          ProgressLine: {
            isActive: s.parent.activeSlide === parseInt(el.key),
          },
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
          }, {
            preventUpdateTriggerStateUpdate: true
          }),

          scrollToIfCurrent: (el, s, ctx, opts) => {
            const node = el.node

            window.requestAnimationFrame(() => {
              node.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest'
              })
              // preventUpdateTriggerStateUpdate
            })
          },

          onUpdate: (el, s, ctx, opts) => {
            const current = s.parent.activeSlide
            const isActive = parseInt(el.key) === current
            // console.log('step')
            // console.log(el.key, s.parent)
            // console.log(isActive)
            if (isActive) {
              el.props.scrollToIfCurrent(el, s, ctx, opts)
            }
          },
        }),
  },
  $stateCollection: ({
        state
      }) => state.data,
};