"use client";

import Link from "next/link";
import { createTheme } from "@mui/material/styles";

const heading = {
  fontFamily: "var(--font-playfair), Georgia, serif",
  fontWeight: 500,
  letterSpacing: "-0.01em",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F1B24",
      light: "#463F4F",
      dark: "#100D14",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C6A15B",
      light: "#DBBE86",
      dark: "#96773F",
      contrastText: "#1F1B24",
    },
    background: {
      default: "#FAF8F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F1B24",
      secondary: "#6B6472",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif",
    h1: { ...heading, fontSize: "3rem" },
    h2: { ...heading, fontSize: "2.25rem" },
    h3: { ...heading, fontSize: "1.75rem" },
    h4: { ...heading, fontSize: "1.5rem" },
    h5: { ...heading, fontSize: "1.25rem" },
    h6: { ...heading, fontSize: "1.125rem" },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    // Lets any ButtonBase (Button, CardActionArea, IconButton...) client-side
    // navigate with just an `href`, so Server Components don't have to pass
    // next/link across the server-client boundary.
    MuiButtonBase: {
      defaultProps: { LinkComponent: Link },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
  },
});

export default theme;
