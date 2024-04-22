export const RadioMark = {
  props: {
    padding: 'Z',
    theme: 'primary',
    boxSize: 'fit-content',
    round: '100%',
    ':after': {
      content: '""',
      boxSize: 'Y2',
      background: 'white',
      display: 'block',
      round: '100%',
    },
  },
};