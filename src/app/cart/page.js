"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useCart } from "@/context/CartContext";

function CartItemRow({ item, onQuantityChange, onRemove }) {
  return (
    <Paper
      elevation={0}
      sx={{ p: { xs: 2, sm: 3 }, boxShadow: "0 1px 3px rgba(17, 24, 39, 0.08)" }}
    >
      <Stack direction="row" spacing={{ xs: 2, sm: 3 }}>
        <Box
          sx={{
            position: "relative",
            width: { xs: 80, sm: 96 },
            aspectRatio: "4 / 5",
            flexShrink: 0,
            overflow: "hidden",
            borderRadius: 1.5,
            bgcolor: "background.default",
          }}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="96px"
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Stack direction="row" spacing={1} sx={{ justifyContent: "space-between" }}>
            <Box sx={{ minWidth: 0 }}>
              <Link
                component={NextLink}
                href={`/products/${item.id}`}
                variant="h6"
                underline="hover"
                color="text.primary"
                sx={{ display: "block" }}
                noWrap
              >
                {item.name}
              </Link>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {item.color} · Size {item.size}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${item.price.toFixed(2)} each
              </Typography>
            </Box>

            <IconButton
              onClick={() => onRemove(item.key)}
              aria-label={`Remove ${item.name} from cart`}
              sx={{
                alignSelf: "flex-start",
                color: "text.secondary",
                "&:hover": { color: "error.main", bgcolor: "rgba(239, 68, 68, 0.08)" },
              }}
            >
              <DeleteOutlinedIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: 2,
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: 1.5,
            }}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                bgcolor: "background.default",
                borderRadius: 999,
                px: 0.5,
              }}
            >
              <IconButton
                size="small"
                onClick={() => onQuantityChange(item.key, item.quantity - 1)}
                disabled={item.quantity <= 1}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography
                variant="body2"
                sx={{ minWidth: 36, textAlign: "center", fontWeight: 600 }}
                aria-live="polite"
              >
                {item.quantity}
              </Typography>
              <IconButton
                size="small"
                onClick={() => onQuantityChange(item.key, item.quantity + 1)}
                aria-label={`Increase quantity of ${item.name}`}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "primary.main" }}>
              ${(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

function EmptyCart() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: 3,
        textAlign: "center",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(17, 24, 39, 0.08)",
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          mx: "auto",
          borderRadius: "50%",
          bgcolor: "rgba(79, 70, 229, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ShoppingBagOutlinedIcon sx={{ fontSize: 36, color: "primary.main" }} />
      </Box>
      <Typography variant="h4" sx={{ mt: 3 }} gutterBottom>
        Your cart is empty
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 400, mx: "auto" }}>
        Nothing here yet. Have a look through the collection and add something you
        like.
      </Typography>
      <Button href="/products" variant="contained" size="large">
        Continue Shopping
      </Button>
    </Box>
  );
}

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, itemCount, totalPrice } = useCart();
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [noticeKey, setNoticeKey] = useState(0);

  const handleCheckout = () => {
    setNoticeKey((current) => current + 1);
    setNoticeOpen(true);
  };

  const handleNoticeClose = (event, reason) => {
    if (reason === "clickaway") return;
    setNoticeOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}>
        Your Cart
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: { xs: 4, md: 6 } }}>
        {itemCount === 0
          ? "No items yet."
          : `${itemCount} ${itemCount === 1 ? "item" : "items"} in your cart.`}
      </Typography>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2}>
              {items.map((item) => (
                <CartItemRow
                  key={item.key}
                  item={item}
                  onQuantityChange={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 3.5 },
                boxShadow: "0 1px 3px rgba(17, 24, 39, 0.08)",
                position: { md: "sticky" },
                top: { md: 88 },
              }}
            >
              <Typography variant="h5" gutterBottom>
                Order Summary
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 3 }}>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Total items</Typography>
                  <Typography>{itemCount}</Typography>
                </Stack>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Subtotal</Typography>
                  <Typography>${totalPrice.toFixed(2)}</Typography>
                </Stack>
              </Stack>

              <Divider sx={{ my: 2.5 }} />

              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "baseline" }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Total
                </Typography>
                <Typography variant="h5" color="primary.main">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Stack>

              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleCheckout}
                sx={{ mt: 3 }}
              >
                Checkout
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 2, textAlign: "center" }}
              >
                Taxes and shipping calculated at checkout.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      )}

      <Snackbar
        key={noticeKey}
        open={noticeOpen}
        onClose={handleNoticeClose}
        autoHideDuration={3000}
        message="Checkout is a demo — no order was placed."
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />


    </Container>
  );
}
