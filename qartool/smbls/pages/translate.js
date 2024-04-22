export const translate = {
  extend: [
    'Layout',
  ],
  state: {
  },
  content: {
    props: {
      padding: 'D1',
    },
    Textarea: {
      onInput: async (ev, el, s, ctx) => {
        s.update({
          translation_text: el.node.value
        })
      },
    },
    Button: {
      theme: 'primary',
      text: 'Translate',
      alignSelf: 'start',
      padding: 'A B2',
      onClick: async (ev, el, s, ctx) => {
        const isLocal = location.hostname === 'localhost'
        const {fetchHelsinki, fetchRati} = ctx.utils
        const translation = await (isLocal ? fetchRati : fetchHelsinki)(s.translation_text)
        s.update({
          translation
        })
      },
    },
    Pre: {
      if: (el, s) => s.translation,
      props: {
        ':before': {
          left: 'C1',
        },
        shape: 'tooltip',
        shapeDirection: 'top',
        background: 'black 1 +6',
        theme: 'elevated',
        round: 'Z2',
        padding: 'A B',
        widthRange: 'I',
        width: '100%',
        margin: 'B 0',
        text: '{{ translation }}',
      },
    },
  },
};