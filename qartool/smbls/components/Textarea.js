export const Textarea = {
  extend: [
    'smbls.Textarea',
  ],
  props: {
    variant: null,
    border: 'none',
    color: 'white',
    background: 'light 0.1',
    placeholder: 'Type in...',
    padding: 'B B2',
    boxSize: 'G 100%',
    widthRange: 'none I',
    heightRange: 'auto',
    '@mobileL': {
      boxSize: 'F 100%',
    },
  },
};