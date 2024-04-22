export const Layout = {
  extend: [
    'Flex',
  ],
  props: {
    padding: 'A',
    flow: 'y',
    margin: '0 auto',
    maxWidth: 'J1',
    boxSize: '100%',
    overflow: 'hidden',
    content: {
      order: 12,
      flexFlow: 'column',
      gap: 'B1',
      margin: 'C1 -',
    },
  },
  Header: {
    zIndex: 2,
    order: 1,
  },
  Footer: {
  },
};