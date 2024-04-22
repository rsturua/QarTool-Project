export const Dropdown = {
  extend: [
    'Flex',
  ],
  attr: {
    dropdown: true,
  },
  props: {
    maxHeight: 'G3',
    flow: 'y',
    theme: 'quaternary',
    overflow: 'hidden auto',
    zIndex: 1,
    padding: 'Z',
    round: 'A',
    position: 'absolute',
    background: 'black 1 +10',
    hidden: true,
    top: '120%',
    right: '0',
    gap: 'Z2',
    style: {
      listStyleType: 'none',
    },
    transition: 'B defaultBezier',
    transitionProperty: 'transform, opacity, visibility',
    '.hidden': {
      transform: 'translate3d(0, 10%, 1px)',
      opacity: 0,
      visibility: 'hidden',
    },
  },
  childExtend: {
    extend: [
      'Link',
    ],
    props: {
      tag: 'a',
      theme: null,
      gap: 'Z',
      padding: 'Z A2',
      minWidth: 'F',
      background: 'transparent',
      color: 'currentColor',
      align: 'start end',
      textAlign: 'end',
      ':hover': {
        background: 'light 0.1 -26',
      },
    },
  },
  $propsCollection: ({
        props
      }) => props.options,
};