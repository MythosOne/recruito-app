export const theme = Object.freeze({
  colors: {
    primary: '#f4e041',
    secondary: '#f5cc66',
    white: '#fff',
    lightGray: '#d0cfcf',
    gray: '#a2a2a2',
    // darkGray: '#7E7E7E',
    black: '#000',
    // overlay: 'rgba(0, 0, 0, 0.5)',
  },
  fonts: {
    main: "'Nunito', sans-serif",
  },
  fontSizes: {
    // xs: '12px',
    s: '14px',
    m: '16px',
    l: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  breakpoints: {
    mobile: '360px',
    tablet: '768px',
    desktop: '1280px',
  },

    shadows: {
    defaultShadow: '',
    hoverShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
  },
});