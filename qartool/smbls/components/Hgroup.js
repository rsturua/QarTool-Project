export const Hgroup = {
  tag: 'hgroup',
  extend: [
    'Flex',
  ],
  props: {
    flow: 'y',
    gap: 'Y2',
  },
  H: {
    tag: 'h3',
    text: 'Heading',
    lineHeight: '1em',
    margin: '0',
  },
  P: {
    text: 'Paragraph',
    margin: '0',
    color: 'paragraph',
  },
};