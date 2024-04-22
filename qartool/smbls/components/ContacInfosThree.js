export const ContacInfosThree = {
  extend: [
    'Grid',
  ],
  state: '~/notable_georgian_projects',
  props: {
    gap: 'C1',
    columns: 'repeat(3, 1fr)',
  },
  childExtend: {
    extend: [
      'Link',
      'IconHgroupTwo',
    ],
    props: ({
          state
        }) => ({
          gap: 'Z2',
          target: '_blank',
          href: state.url,
          ':hover h5': {
            textDecoration: 'underline'
          }
        }),
    Icon: null,
    Hgroup: {
      padding: 'Y1 - - -',
      H: {
        text: '{{ title }}',
      },
      P: {
        text: '{{ description }}',
        maxWidth: 'G2',
      },
    },
    Link: {
      props: () => ({
            textDecoration: 'underline',
            fontWeight: '400',
            text: '{{ url }}',
          }),
    },
  },
  $stateCollection: (el, s) => s.data,
};