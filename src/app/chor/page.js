"use client";

/**
 * app/page.js  (plain JavaScript, no TypeScript)
 *
 * "অপরাধী" reveal countdown page — Next.js (App Router) + Material UI.
 *
 * Concept: an interrogation-room case file. A single spotlight falls on a
 * digital evidence-tag countdown, a red "CONFIDENTIAL" stamp sits rotated
 * in the corner, and the reveal time is fixed at 10:00 PM today (rolls to
 * tomorrow automatically if it's already past 10 PM when the page loads).
 *
 * Setup:
 *   npm install @mui/material @emotion/react @emotion/styled
 *   Drop this file at src/app/chor/page.js (or wherever your route lives).
 *
 * Fonts: loaded here with next/font/google so the file is drop-in and
 * self-contained. If you already load fonts globally in app/layout.js,
 * feel free to move the font setup there instead.
 */

import { useEffect, useMemo, useState } from "react";
import { Noto_Sans_Bengali, JetBrains_Mono } from "next/font/google";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

// ---- design tokens ---------------------------------------------------
const tokens = {
  bg: "#0a0a0c",
  bgVignette: "#141317",
  red: "#c81d25",
  redDim: "#7a1216",
  paper: "#111114",
  hairline: "#2a2a2e",
  text: "#ece9e4",
  textMuted: "#8b8a8f",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: tokens.bg, paper: tokens.paper },
    primary: { main: tokens.red },
    text: { primary: tokens.text, secondary: tokens.textMuted },
  },
  typography: {
    fontFamily: bengali.style.fontFamily,
  },
});

// ---- countdown target: today 10:00 PM (rolls to tomorrow if passed) --
function getTargetTime() {
  const now = new Date();
  const target = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    22,
    0,
    0,
    0
  );
  if (target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 1);
  }
  return target;
}

function pad(n) {
  return n.toString().padStart(2, "0");
}

export default function Page() {
  const target = useMemo(() => getTargetTime(), []);
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, target.getTime() - Date.now())
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, target.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const isRevealed = remaining <= 0;

  const units = [
    { label: "ঘণ্টা", value: hours },
    { label: "মিনিট", value: minutes },
    { label: "সেকেন্ড", value: seconds },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100dvh",
          position: "relative",
          overflow: "hidden",
          bgcolor: tokens.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          py: { xs: 8, md: 4 },
        }}
      >
        {/* spotlight vignette */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(ellipse 60% 45% at 50% 38%, ${tokens.bgVignette} 0%, ${tokens.bg} 65%, #000000 100%)`,
          }}
        />

        {/* faint grain / scanline texture */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.05,
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
          }}
        />

        {/* confidential stamp */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 24, md: 48 },
            right: { xs: 24, md: 56 },
            border: `2px solid ${tokens.red}`,
            color: tokens.red,
            borderRadius: "6px",
            px: 2,
            py: 0.75,
            transform: "rotate(8deg)",
            opacity: 0.75,
            userSelect: "none",
          }}
        >
          <Typography
            className={mono.className}
            sx={{
              fontSize: { xs: 11, md: 13 },
              letterSpacing: "0.25em",
              fontWeight: 700,
            }}
          >
            গোপনীয়
          </Typography>
        </Box>

        {/* content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 720,
            textAlign: "center",
          }}
        >
          {/* eyebrow */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              border: `1px solid ${tokens.hairline}`,
              borderRadius: "999px",
              px: 2,
              py: 0.5,
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor: tokens.red,
                boxShadow: `0 0 8px ${tokens.red}`,
                animation: "pulse 1.6s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.35 },
                },
              }}
            />
            <Typography
              className={mono.className}
              sx={{
                fontSize: 12,
                letterSpacing: "0.2em",
                color: tokens.textMuted,
                textTransform: "uppercase",
              }}
            >
              তদন্ত ফাইল #০৭ — সক্রিয়
            </Typography>
          </Box>

          {/* headline */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.8rem" },
              lineHeight: 1.15,
              color: tokens.text,
              mb: 2,
            }}
          >
            অপরাধী কে?
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              color: tokens.textMuted,
              maxWidth: 560,
              mx: "auto",
              mb: 6,
              lineHeight: 1.8,
            }}
          >
            আর মাত্র কিছু সময়ের অপেক্ষা। আজ রাত ১০টায় উন্মোচিত হবে
            অপরাধীর আসল পরিচয় — সত্য গোপন থাকবে না বেশিক্ষণ।
          </Typography>

          {/* countdown or reveal */}
          {!isRevealed ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 1.5, sm: 3 },
                flexWrap: "wrap",
              }}
            >
              {units.map((unit, i) => (
                <Box key={unit.label} sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, sm: 3 } }}>
                  <Box
                    sx={{
                      bgcolor: tokens.paper,
                      border: `1px solid ${tokens.hairline}`,
                      borderRadius: "10px",
                      px: { xs: 2.2, sm: 3.2 },
                      py: { xs: 1.6, sm: 2.2 },
                      minWidth: { xs: 76, sm: 104 },
                      boxShadow: `0 0 0 1px #000, 0 12px 30px -12px ${tokens.red}55`,
                    }}
                  >
                    <Typography
                      className={mono.className}
                      sx={{
                        fontSize: { xs: "2rem", sm: "2.8rem" },
                        fontWeight: 700,
                        color: tokens.text,
                        lineHeight: 1,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {pad(unit.value)}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: { xs: 11, sm: 12 },
                        letterSpacing: "0.15em",
                        color: tokens.textMuted,
                      }}
                    >
                      {unit.label}
                    </Typography>
                  </Box>
                  {i < units.length - 1 && (
                    <Typography
                      className={mono.className}
                      sx={{
                        fontSize: { xs: "1.6rem", sm: "2.2rem" },
                        color: tokens.redDim,
                        fontWeight: 700,
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      :
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                border: `1px solid ${tokens.red}`,
                borderRadius: "10px",
                px: 4,
                py: 3,
                display: "inline-block",
                bgcolor: `${tokens.red}14`,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.3rem", md: "1.6rem" },
                  color: tokens.red,
                }}
              >
                সময় শেষ — পরিচয় প্রকাশিত হচ্ছে
              </Typography>
            </Box>
          )}

          {/* credit line — investigation team */}
          <Box
            sx={{
              mt: 6,
              pt: 3,
              borderTop: `1px dashed ${tokens.hairline}`,
              maxWidth: 520,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 13, sm: 14 },
                color: tokens.textMuted,
                lineHeight: 1.9,
              }}
            >
              এডভোকেট <Box component="span" sx={{ color: tokens.text, fontWeight: 700 }}>অরুপ সাহা</Box>-র
              হাত ধরে, ওসি <Box component="span" sx={{ color: tokens.text, fontWeight: 700 }}>সজীব কুমার সাহা</Box>-র
              অধীনে, <Box component="span" sx={{ color: tokens.text, fontWeight: 700 }}>সাগর কুমার সাহা</Box>-র
              দূরদর্শিতায় প্রকাশ হবে আজকের আসামির পরিচয়।
            </Typography>
          </Box>

          {/* footer note */}
          <Typography
            className={mono.className}
            sx={{
              mt: 3,
              fontSize: 11,
              letterSpacing: "0.15em",
              color: tokens.textMuted,
              textTransform: "uppercase",
            }}
          >
            প্রকাশের সময়: রাত ১০:০০ · প্রতি সেকেন্ডে হালনাগাদ হচ্ছে
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}