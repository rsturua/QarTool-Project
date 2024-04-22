export const Nav = {
  $stateCollection: ({
        state
      }) => Object.values(state.root.nav.data),
  extend: [
    'Flex',
  ],
  props: {
    '@mobileL': {
      gap: 'A',
      flow: 'y',
    },
  },
  childExtend: {
    extend: [
      'Link',
      'Button',
      'DropdownParent',
    ],
    props: ({
          state
        }) => ({
          fontWeight: 'bold',
          theme: 'secondary',
          background: '',
          position: 'relative',
          textAlign: 'center',
          gap: 'Z',
          href: state.href,
          text: state.text,
          icon: state.icon,
          '@dark': {
            color: 'white',
          },
          '@light': {
            color: 'black',
          },
          flow: 'row-reverse',
          textTransform: 'uppercase',
          ':hover': {
            background: 'light 0.1 -26',
          },
        }),
    Dropdown: {
      if: ({
            state
          }) => state.subnav,
      props: ({
            state
          }) => ({
            options: Object.values(state.subnav),
            '@mobileL': {
              top: '120%',
              right: 'auto',
              left: '50%',
              transform: 'translate3d(-50%, 0, 1px)'
            }
          }),
    },
  },
};