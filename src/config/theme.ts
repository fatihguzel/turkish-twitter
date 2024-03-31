export const themeConfig = {
  palette: {
    primary: {
      main: "#2a2a2a",
      secondary: "#1f2937",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
          backgroundColor: "#3e3e3e",
        },
      },
    },
    MuiCard: {
      root: {
        backgroundColor: "#3e3e3e",
      },
    },
  },
};
