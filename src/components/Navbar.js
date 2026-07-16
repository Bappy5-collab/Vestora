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
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

const CART_LINK = { label: "Cart", href: "/cart" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
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
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "primary.main",
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
                sx={{
                  color: isActive(link.href) ? "primary.main" : "text.secondary",
                  bgcolor: isActive(link.href) ? "rgba(79, 70, 229, 0.08)" : "transparent",
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "rgba(79, 70, 229, 0.08)",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <IconButton
            component={Link}
            href={CART_LINK.href}
            aria-label={`Cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
            sx={{
              color: isActive(CART_LINK.href) ? "primary.main" : "text.secondary",
              bgcolor: "background.default",
              transition: "all 0.2s",
              "&:hover": { color: "primary.main" },
            }}
          >
            <Badge badgeContent={itemCount} color="primary" showZero>
              <ShoppingBagOutlinedIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 1 }} role="presentation" onClick={() => setOpen(false)}>
          <Typography
            variant="h6"
            sx={{
              px: 2,
              py: 2.5,
              fontWeight: 800,
              color: "primary.main",
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
                sx={{ borderRadius: 2 }}
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
