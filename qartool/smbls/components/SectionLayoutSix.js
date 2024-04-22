export const SectionLayoutSix = {
  extend: [
    'Flex',
  ],
  props: {
    boxSize: 'H1 J',
    position: 'relative',
    round: 'B',
    overflow: 'hidden',
    padding: 'E',
    flow: 'y',
    gap: 'D',
    ':after': {
      content: '""',
      boxSize: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '-1',
      background: 'black .7',
    },
  },
  SectionHgroup: {
  },
  BtnSet: {
    0: {
      props: {
        theme: 'primary',
      },
    },
    1: {
    },
    extend: 'Flex',
    childExtend: 'Btn',
    props: {
      zIndex: '3',
      gap: 'A',
    },
  },
  BannerImg: {
    position: 'absolute',
    boxSize: '100%',
    top: '0',
    left: '0',
    zIndex: '-2',
  },
};