"use client";

import Link from "next/link";
import { Box, Container, Link as MuiLink, Stack, Typography } from "@mui/material";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Cart", href: "/cart" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#111827", color: "#fff", mt: 8, py: 6 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Vestora
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, color: "rgba(255,255,255,0.6)" }}>
              Timeless pieces, made for everyday.
            </Typography>
          </Box>

          <Stack direction="row" spacing={3}>
            {FOOTER_LINKS.map((link) => (
              <MuiLink
                key={link.href}
                component={Link}
                href={link.href}
                underline="hover"
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  "&:hover": { color: "#fff" },
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
        </Stack>

        <Typography
          variant="body2"
          sx={{ mt: 4, color: "rgba(255,255,255,0.4)" }}
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} Vestora. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
