export const ProgressLine = {
  tag: 'progress',
  extend: [
    'Flex',
  ],
  props: {
    value: 0.7,
    height: 'X',
    minWidth: 'F3',
    round: '2px',
    overflow: 'hidden',
    '::-webkit-progress-bar': {
      '@dark': {
        background: 'shark',
      },
      '@light': {
        background: 'hurricane',
      },
    },
    '::-webkit-progress-value': {
      borderRadius: '2px',
      theme: 'primary',
    },
  },
  attr: {
    max: ({
          props
        }) => props.max,
    progress: ({
          props
        }) => props.progress,
    value: ({
          props
        }) => props.value,
  },
};