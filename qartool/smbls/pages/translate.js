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
    Hgroup: {
      margin: '-C1 X B2',
      H: {
        text: 'QarTool Translator',
      },
      P: {
        text: 'Please enter what you want to translte below',
      },
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
        const fetchRati = ctx.utils.fetchRati
        const translation = await fetchRati(s.translation_text)
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