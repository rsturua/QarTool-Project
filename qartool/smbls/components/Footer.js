export const Footer = {
  extend: [
    'Flex',
  ],
  props: {
    flow: 'y',
    order: 99,
    width: '100%',
    textAlign: 'center',
    margin: 'auto - - auto',
    fontWeight: '500',
  },
  Img: {
    props: ({
          context
        }) => {
          return {
            width: '100%',
            opacity: '0.35',
            margin: 'auto 0 -E',
            mixBlendMode: 'multiply',
            src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi1bfd1bd3/dc408621-5ef1-43c3-ace9-f2f8d4cfb36b-975c12ed-4ce6-4904-9984-b2c6a410e051-45e8dcf2-8fa4-4529-a127-dad7fa44bf53.jpeg'
          }
        },
  },
  Text: {
    zIndex: 1,
    text: '© QarTool 2024',
  },
};