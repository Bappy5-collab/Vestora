"use client";

import Link from "next/link";
import { createTheme } from "@mui/material/styles";

const heading = {
  fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5",
      light: "#818CF8",
      dark: "#3730A3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#B45309",
      contrastText: "#1F2937",
    },
    background: {
      default: "#F6F7FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
    divider: "#E5E7EB",
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
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: { LinkComponent: Link },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 20,
          paddingRight: 20,
          transition: "all 0.2s ease",
        },
        sizeLarge: {
          paddingLeft: 28,
          paddingRight: 28,
          paddingTop: 12,
          paddingBottom: 12,
        },
        contained: {
          boxShadow: "0 4px 14px rgba(79, 70, 229, 0.25)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(79, 70, 229, 0.35)",
          },
          "&:active": { transform: "translateY(0)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          transition: "all 0.15s",
          "&.Mui-selected": {
            backgroundColor: "#4F46E5",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "#3730A3" },
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          flexWrap: "wrap",
          gap: 8,
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid #E5E7EB",
            borderRadius: 999,
            paddingLeft: 16,
            paddingRight: 16,
            marginLeft: 0,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { transition: "color 0.2s" },
      },
    },
  },
});

export default theme;
