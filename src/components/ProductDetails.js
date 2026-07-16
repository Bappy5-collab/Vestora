"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Rating,
  Snackbar,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmKey, setConfirmKey] = useState(0);

  // ToggleButtonGroup sends null when the active button is clicked again.
  const handleColorChange = (event, next) => {
    if (next !== null) setColor(next);
  };

  const handleSizeChange = (event, next) => {
    if (next !== null) setSize(next);
  };

  const handleAddToCart = () => {
    addToCart(product, { color, size, quantity });
    // Remounting on every add restarts the auto-hide timer, which otherwise only
    // runs when `open` flips false -> true and would cut a repeat add's message short.
    setConfirmKey((current) => current + 1);
    setConfirmOpen(true);
  };

  const handleConfirmClose = (event, reason) => {
    if (reason === "clickaway") return;
    setConfirmOpen(false);
  };

  return (
    <>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              aspectRatio: "4 / 5",
              overflow: "hidden",
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              preload
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Chip
              label={product.category}
              size="small"
              variant="outlined"
              sx={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
            />
            <Chip
              label={product.inStock ? "In stock" : "Out of stock"}
              size="small"
              color={product.inStock ? "success" : "default"}
              variant={product.inStock ? "filled" : "outlined"}
            />
          </Stack>

          <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
            {product.name}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 2, alignItems: "center" }}>
            <Rating value={product.rating} precision={0.5} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              {product.rating} ({product.reviewCount} reviews)
            </Typography>
          </Stack>

          <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
            ${product.price.toFixed(2)}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 2 }}>
            {product.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="subtitle2" gutterBottom>
            Color: {color}
          </Typography>
          <ToggleButtonGroup
            value={color}
            exclusive
            onChange={handleColorChange}
            size="small"
            aria-label="Select a colour"
            sx={{ flexWrap: "wrap" }}
          >
            {product.colors.map((option) => (
              <ToggleButton key={option} value={option}>
                {option}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
            Size: {size}
          </Typography>
          <ToggleButtonGroup
            value={size}
            exclusive
            onChange={handleSizeChange}
            size="small"
            aria-label="Select a size"
            sx={{ flexWrap: "wrap" }}
          >
            {product.sizes.map((option) => (
              <ToggleButton key={option} value={option}>
                {option}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
            Quantity
          </Typography>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              width: "fit-content",
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
            }}
          >
            <IconButton
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography sx={{ minWidth: 40, textAlign: "center" }} aria-live="polite">
              {quantity}
            </Typography>
            <IconButton
              onClick={() => setQuantity((current) => current + 1)}
              aria-label="Increase quantity"
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Button
            variant="contained"
            size="large"
            fullWidth
            disabled={!product.inStock}
            onClick={handleAddToCart}
            startIcon={<ShoppingBagOutlinedIcon />}
            sx={{ mt: 4 }}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        key={confirmKey}
        open={confirmOpen}
        onClose={handleConfirmClose}
        autoHideDuration={2500}
        message="Added to cart"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}
