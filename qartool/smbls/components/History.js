export const History = {
  extend: [
    'SectionLayoutSix',
  ],
  props: {
    minHeight: 'I',
    minWidth: '90vw',
    width: '100%',
    padding: 'B C D1',
    align: 'stretch space-between',
    flow: 'x',
    flex: 1,
    style: {
      scrollSnapAlign: 'center',
    },
    ':after': {
      content: '""',
      boxSize: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '2',
      background: 'black .7',
    },
    scrollToIfCurrent: (el, s, ctx, opts) => {
          const node = el.node

          window.requestAnimationFrame(() => {
            node.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center'
            })
          })
        },
    onUpdate: (el, s, ctx, opts) => {
          const current = s.parent.activeSlide
          const isActive = parseInt(el.key) === current
          if (isActive) {
            el.props.scrollToIfCurrent(el, s, ctx, opts)
          }
        },
  },
  SectionHgroup: {
    H6: {
      text: '{{ age }}',
      props: {
        margin: '0',
        color: 'white',
      },
    },
    props: {
      flex: 1,
      zIndex: 3,
      H: {
        text: '{{ title }}',
        props: {
          color: 'white',
          fontSize: 'G1',
        },
      },
      P: {
        text: '{{ paragraph }}',
        props: {
          width: '100%',
          color: 'white',
          fontSize: 'Z2',
        },
      },
    },
  },
  Flex_poster: {
    props: {
      zIndex: 3,
      flex: 1,
      align: 'center center',
    },
    Img: {
      props: ({
            state
          }) => ({
            src: state.poster,
            round: 'A',
            maxHeight: '100%',
            maxWidth: '100%'
          }),
    },
  },
  BtnSet: {
    0: {
      props: {
        theme: 'primary',
        margin: '- - - auto',
        gap: 'X',
        Icon: {
          name: 'chevron right',
        },
        onClick: (ev, el, s) => {
              const key = el.parent.parent.key
              s.parent.update({
                activeSlide: parseInt(key) + 1
              })
            },
      },
      text: 'Next',
    },
    1: {
      if: ({
            parent
          }) => parent.parent.key !== '0',
      props: {
        theme: 'transparent',
        flow: 'row-reverse',
        gap: 'X',
        Icon: {
          name: 'chevron left',
        },
        onClick: (ev, el, s) => {
              const key = el.parent.parent.key
              s.parent.update({
                activeSlide: parseInt(key) - 1
              })
            },
      },
      text: 'Previous',
    },
    props: {
      position: 'absolute',
      inset: 'auto B B',
      padding: '0',
      flow: 'row-reverse',
      align: 'center space-between',
    },
  },
};