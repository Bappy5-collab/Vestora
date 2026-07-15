"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

const CATEGORIES = ["All", ...new Set(products.map((product) => product.category))];

const GRID_SIZE = { xs: 12, sm: 6, md: 4, lg: 3 };

function ProductCardSkeleton() {
  return (
    <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider" }}>
      {/* height: auto lets the aspect ratio win over Skeleton's default 1.2em. */}
      <Skeleton variant="rectangular" sx={{ aspectRatio: "4 / 5", height: "auto" }} />
      <CardContent>
        <Skeleton variant="rounded" width={72} height={24} sx={{ mb: 1.5 }} />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="40%" />
      </CardContent>
    </Card>
  );
}

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const visibleProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  // `next` is null when the active button is clicked again — keep the current filter.
  const handleCategoryChange = (event, next) => {
    if (next !== null) {
      setCategory(next);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}>
        Products
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Everything in the collection, in one place.
      </Typography>

      <ToggleButtonGroup
        value={category}
        exclusive
        onChange={handleCategoryChange}
        size="small"
        aria-label="Filter products by category"
        sx={{ mt: 4, mb: 4, flexWrap: "wrap" }}
      >
        {CATEGORIES.map((option) => (
          <ToggleButton key={option} value={option}>
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {loading ? (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid key={index} size={GRID_SIZE}>
              <ProductCardSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : visibleProducts.length === 0 ? (
        <Box
          sx={{
            py: 10,
            textAlign: "center",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>
            No products found
          </Typography>
          <Typography color="text.secondary">
            Nothing in {category} just yet — try another category.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {visibleProducts.map((product) => (
            <Grid key={product.id} size={GRID_SIZE}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
