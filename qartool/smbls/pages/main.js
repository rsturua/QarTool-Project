export const main = {
  extend: 'Layout',
  content: {
    props: {
      alignSelf: 'center',
      textAlign: 'center',
      order: 2,
      margin: '3.5% - -',
      fontSize: 'B',
      maxWidth: 'H3',
    },
    childExtend: 'P',
    content: [
      {
        text: 'Welcome to QarTool! A research project for Natural Language Processing (NLP) of Georgian Language. ',
      },
      {
        text: 'QarTool is an interactive translation environment for Georgian language. This platform is created to demonstrate the achievements of QarTool-LM Beta - a beta language model designed for translation purposes, specifically created for text translation from Georgian to English. ',
      },
      {
        Span: {
          text: `If you would like to find out more about QarTool's research, please click below, or navigate to `,
        },
        Link: {
          textDecoration: 'underline',
          href: '/research',
          text: 'Research',
        },
        Span_2: {
          text: ' page. Enjoy!',
        },
      },
    ],
  },
};