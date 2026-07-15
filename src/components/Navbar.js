"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

const CART_LINK = { label: "Cart", href: "/cart" };

// Wired up to the cart context in a later phase.
const CART_COUNT = 0;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: "divider" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 1 }}>
          <IconButton
            edge="start"
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component={Link}
            href="/"
            variant="h6"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 4 },
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "text.primary",
            }}
          >
            Vestora
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1, gap: 1 }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                color="inherit"
                sx={{ color: isActive(link.href) ? "text.primary" : "text.secondary" }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <IconButton
            component={Link}
            href={CART_LINK.href}
            aria-label={`Cart, ${CART_COUNT} items`}
            sx={{ color: isActive(CART_LINK.href) ? "text.primary" : "text.secondary" }}
          >
            <Badge badgeContent={CART_COUNT} color="secondary" showZero>
              <ShoppingBagOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240 }} role="presentation" onClick={() => setOpen(false)}>
          <Typography
            variant="h6"
            sx={{
              px: 2,
              py: 2.5,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Vestora
          </Typography>
          <List>
            {[...NAV_LINKS, CART_LINK].map((link) => (
              <ListItemButton
                key={link.href}
                component={Link}
                href={link.href}
                selected={isActive(link.href)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
