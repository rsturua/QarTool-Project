export default {
  COLOR: {
    light: '#d9d9dd',
    gray: '#6e6e72',
    dark: '#141416',
    monza: '#da1616',
    heath: '#3e0f0f',
    coldTurkey: '#fbf9f9',
    black: '#000000',
    transparent: 'rgba(0, 0, 0, 0)',
    white: '#fff',
  },
  GRADIENT: {
  },
  THEME: {
    document: {
      '@dark': {
        background: 'dark',
        color: 'light',
      },
      '@light': {
        background: 'light',
        color: 'dark',
      },
    },
    primary: {
      '@light': {
        background: 'monza',
        color: 'coldTurkey',
      },
      '@dark': {
        color: 'coldTurkey',
        background: 'monza',
      },
    },
    secondary: {
      '@dark': {
        color: 'monza',
        background: 'none',
      },
      '@light': {
        background: 'none',
        color: 'monza',
      },
    },
    elevated: {
      '@dark': {
        background: 'black',
        color: 'light',
      },
      '@light': {
        color: 'dark 1 -10',
        background: 'light 1 -16',
      },
    },
    none: {
      color: 'none',
      background: 'none',
    },
    transparent: {
      color: 'currentColor',
      background: 'transparent',
    },
  },
  FONT: {
  },
  FONT_FAMILY: {
    Main: {
      isDefault: true,
      value: [
        'Courier',
      ],
    },
    Default: {
      value: [
        'San Francisco, Helvetica Neue, Helvetica, Arial',
      ],
      type: 'sans-serif',
    },
  },
  TYPOGRAPHY: {
    base: 16,
    ratio: 1.25,
    subSequence: true,
    templates: {
      h1: {
      },
      h2: {
      },
      h3: {
      },
      h4: {
      },
      h5: {
      },
      h6: {
      },
      body: {
      },
    },
  },
  SPACING: {
    base: 16,
    ratio: 1.618,
    subSequence: true,
    range: [
      -5,
      12,
    ],
  },
  TIMING: {
    base: 150,
    ratio: 1.333,
    subSequence: true,
  },
  RESET: {
    html: {
      height: 'auto',
      minHeight: '100% ',
    },
    body: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      minHeight: '100dvh',
    },
  },
  ANIMATION: {
    fadeInUp: {
      from: {
        transform: 'translate3d(0, 12.5%, 1px)',
        opacity: 0,
      },
      to: {
        transform: 'translate3d(0, 0, 1px)',
        opacity: 1,
      },
    },
    fadeOutDown: {
      from: {
        transform: 'translate3d(0, 0, 1px)',
        opacity: 1,
      },
      to: {
        transform: 'translate3d(0, 12.5%, 1px)',
        opacity: 0,
      },
    },
    marquee: {
      from: {
        transform: 'translate3d(0, 0, 1px)',
      },
      to: {
        transform: 'translate3d(-50%, 0, 1px)',
      },
    },
  },
  SHAPE: {
  },
  ICONS: {
    arrowDownCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12l4 4 4-4M12 8v8"/></svg>',
    arrowDownLeft: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-left"><path d="M17 7L7 17M17 17H7V7"/></svg>',
    arrowDownRight: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-right"><path d="M7 7l10 10M17 7v10H7"/></svg>',
    arrowDown: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>',
    arrowLeftCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"/><path d="M12 8l-4 4 4 4M16 12H8"/></svg>',
    arrowLeft: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    arrowRight: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    arrowRightCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"/><path d="M12 16l4-4-4-4M8 12h8"/></svg>',
    arrowUpCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V8"/></svg>',
    arrowUpLeft: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-left"><path d="M17 17L7 7M7 17V7h10"/></svg>',
    arrowUpRight: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><path d="M7 17L17 7M7 7h10v10"/></svg>',
    arrowUp: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    checkCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>',
    check: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5"/></svg>',
    chevronDown: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><path d="M6 9l6 6 6-6"/></svg>',
    chevronLeft: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><path d="M15 18l-6-6 6-6"/></svg>',
    chevronRight: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><path d="M9 18l6-6-6-6"/></svg>',
    chevronUp: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><path d="M18 15l-6-6-6 6"/></svg>',
    copy: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',
    eyeOff: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>',
    eye: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    info: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    minus: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><path d="M5 12h14"/></svg>',
    sun: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
    moon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>',
    moreHorizontal: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
    moreVertical: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
    send: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
    smile: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>',
    search: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
    upload: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>',
    video: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
  },
  MEDIA: {
    tv: '(min-width: 2780px)',
    screenL: '(max-width: 1920px)',
    'screenL<': '(min-width: 1920px)',
    screenM: '(max-width: 1680px)',
    'screenM<': '(min-width: 1680px)',
    screenS: '(max-width: 1440px)',
    'screenS<': '(min-width: 1440px)',
    tabletL: '(max-width: 1366px)',
    'tabletL<': '(min-width: 1366px)',
    tabletM: '(max-width: 1280px)',
    'tabletM<': '(min-width: 1280px)',
    tabletS: '(max-width: 1024px)',
    'tabletS<': '(min-width: 1024px)',
    mobileL: '(max-width: 768px)',
    'mobileL<': '(min-width: 768px)',
    mobileM: '(max-width: 560px)',
    'mobileM<': '(min-width: 560px)',
    mobileS: '(max-width: 480px)',
    mobileXS: '(max-width: 375px)',
    'mobileXS<': '(min-width: 375px)',
    'mobileS<': '(min-width: 480px)',
  },
  CLASS: {
  },
  GRID: {
  },
  CASES: {
  },
  globalTheme: 'dark',
  useReset: true,
  useVariable: true,
  useFontImport: true,
  useIconSprite: true,
  useSvgSprite: true,
  useDefaultConfig: true,
  useDocumentTheme: true,
  verbose: false,
  useDefaultTheme: true,
};