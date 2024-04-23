export const vepkhistqaosani = {
  extend: 'Layout',
  content: {
    state: ({ parent })=> {
      const s = parent.state
      const randomNumber = Math.round(Math.random() * 71)
      const data = s.vephkhistkaosani.data
      const ka = data.ka[randomNumber]
      const en = data.en[randomNumber]
      return {ka, en}
    },
    props: {
      padding: 'D2',
    },
    Label: {
      alignSelf: 'start',
      theme: 'dialog',
      text: `The Knight in the Panther's Skin`,
    },
    H3: {
      props: {
        margin: '- - -A',
      },
      pre: {
        text: '{{ ka }}',
      },
    },
    P: {
      margin: '0',
      text: '{{ en }}',
    },
  },
};