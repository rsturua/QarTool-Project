export const convert = {
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
        text: 'Georgian Script Converter',
      },
      P: {
        text: 'Please enter what you want to convert below',
      },
    },
    Textarea: {
      width: '100%',
      minWidth: '100%',
      backgroundImage: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi4ca179ec/575372ac-2ff2-47e1-98cc-6f47568af787-fea1cf7a-d31c-46e0-9b02-939a74d54892-082c5c98-ec06-4933-8457-ce441c8631c0.png',
      backgroundSize: '68em',
      onInput: async (ev, el, s, ctx) => {
        const anbani = require('anbani')
        s.update({
          converted_text: anbani.core.convert(el.node.value, "მხედრული", "ასომთავრული")
        })
      },
    },
    Flex: {
      props: {
        gap: 'C1',
        childProps: {
          theme: 'field',
          round: 'A',
          fontSize: 'A',
        },
      },
      Select_from: {
        hide: true,
        onChange: el => {
          console.log(el)
        },
        options: [
          {
            text: 'მხედრული',
            value: 'mkh',
          },
          {
            text: 'ასომთავრული',
            value: 'aso',
          },
          {
            text: 'ნუსხური',
            value: 'nsk',
          },
        ],
      },
      Select_to: {
        hide: true,
        options: [
          {
            text: 'მხედრული',
            value: 'mkh',
          },
          {
            text: 'ასომთავრული',
            value: 'aso',
          },
          {
            text: 'ნუსხური',
            value: 'nsk',
          },
        ],
      },
    },
    Pre: {
      if: (el, s) => s.converted_text,
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
        widthRange: '100%',
        width: '100%',
        margin: 'A 0',
        fontSize: 'A2',
        text: '{{ converted_text }}',
      },
    },
  },
};