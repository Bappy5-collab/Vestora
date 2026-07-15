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
    <Box
      component="footer"
      sx={{ borderTop: 1, borderColor: "divider", mt: 8, py: 5 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Typography
            variant="h6"
            sx={{ textTransform: "uppercase", letterSpacing: "0.2em" }}
          >
            Vestora
          </Typography>

          <Stack direction="row" spacing={3}>
            {FOOTER_LINKS.map((link) => (
              <MuiLink
                key={link.href}
                component={Link}
                href={link.href}
                underline="hover"
                variant="body2"
                color="text.secondary"
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          © {new Date().getFullYear()} Vestora. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
