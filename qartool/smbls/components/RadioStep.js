export const RadioStep = {
  extend: [
    'Flex',
  ],
  props: {
    align: 'center flex-start',
    gap: 'Z',
  },
  RadioMark: {
    theme: 'field',
    '.isActive': {
      theme: 'primary',
    },
  },
  Caption: {
    text: 'Step',
  },
  ProgressLine: {
    minWidth: 'E',
    maxWidth: 'E',
    value: 0,
    height: 'V2',
    '.isActive': {
      value: 1,
    },
  },
};