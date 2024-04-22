export const Header = {
  extend: [
    'Flex',
  ],
  props: {
    align: 'center space-between',
    width: '100%',
    '@mobileL': {
      gap: 'A',
      flow: 'y',
    },
  },
  Logo: {
    margin: '- auto - -',
  },
  Nav: {
    margin: '- A - -',
  },
  ThemeSwitcher: {
    props: {
      margin: '- -A2 - -',
    },
    SquareButton: {
      props: (el, s, ctx) => ({
            theme: 'transparent',
            icon: s.root.globalTheme === 'dark' ? 'sun' : 'moon',
            onClick: (ev, el, s) => {
              const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
              const globalTheme = s.root.globalTheme === 'dark' ? 'light' : 'dark'
              ctx.designSystem.globalTheme = globalTheme
              s.rootUpdate({
                globalTheme
              })
            }
          }),
    },
  },
};