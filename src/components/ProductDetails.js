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
  const images = [product.image, ...(product.gallery || [])];
  const [mainImage, setMainImage] = useState(product.image);
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmKey, setConfirmKey] = useState(0);

  const handleColorChange = (event, next) => {
    if (next !== null) setColor(next);
  };

  const handleSizeChange = (event, next) => {
    if (next !== null) setSize(next);
  };

  const handleAddToCart = () => {
    addToCart(product, { color, size, quantity });
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
              borderRadius: 2,
              bgcolor: "background.paper",
              boxShadow: "0 1px 3px rgba(17, 24, 39, 0.08)",
            }}
          >
            <Image
              src={mainImage}
              alt={product.name}
              fill
              preload
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </Box>

          {images.length > 1 && (
            <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
              {images.map((img) => (
                <Box
                  key={img}
                  component="button"
                  type="button"
                  onClick={() => setMainImage(img)}
                  sx={{
                    position: "relative",
                    width: 72,
                    aspectRatio: "4 / 5",
                    p: 0,
                    overflow: "hidden",
                    cursor: "pointer",
                    borderRadius: 1,
                    bgcolor: "background.paper",
                    border: 2,
                    borderColor: img === mainImage ? "primary.main" : "transparent",
                    opacity: img === mainImage ? 1 : 0.7,
                    transition: "all 0.2s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="72px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Stack>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Chip
              label={product.category}
              size="small"
              sx={{ bgcolor: "rgba(79, 70, 229, 0.08)", color: "primary.main" }}
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

          <Typography variant="h4" sx={{ mt: 2, color: "primary.main" }}>
            ${product.price.toFixed(2)}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 2 }}>
            {product.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Color: {color}
              </Typography>
              <ToggleButtonGroup
                value={color}
                exclusive
                onChange={handleColorChange}
                size="small"
                aria-label="Select a colour"
              >
                {product.colors.map((option) => (
                  <ToggleButton key={option} value={option}>
                    {option}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Size: {size}
              </Typography>
              <ToggleButtonGroup
                value={size}
                exclusive
                onChange={handleSizeChange}
                size="small"
                aria-label="Select a size"
              >
                {product.sizes.map((option) => (
                  <ToggleButton key={option} value={option}>
                    {option}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </Box>

          <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
            Quantity
          </Typography>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              width: "fit-content",
              bgcolor: "background.default",
              borderRadius: 999,
              px: 0.5,
            }}
          >
            <IconButton
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography
              sx={{ minWidth: 40, textAlign: "center", fontWeight: 600 }}
              aria-live="polite"
            >
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
