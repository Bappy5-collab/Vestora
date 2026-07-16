"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Drawer,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

const CATEGORIES = ["All", ...new Set(products.map((product) => product.category))];

function ProductCardSkeleton() {
  return (
    <Card
      elevation={0}
      sx={{ height: "100%", boxShadow: "0 1px 3px rgba(17, 24, 39, 0.08)" }}
    >
      <Skeleton variant="rectangular" sx={{ aspectRatio: "4 / 5", height: "auto" }} />
      <CardContent>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width="40%" />
      </CardContent>
    </Card>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  let visibleProducts = products;

  if (category !== "All") {
    visibleProducts = visibleProducts.filter(
      (product) => product.category === category
    );
  }

  if (query) {
    visibleProducts = visibleProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (sort === "price-asc") {
    visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    visibleProducts = [...visibleProducts].sort((a, b) => b.price - a.price);
  }

  const filters = (
    <Box>
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <List disablePadding>
        {CATEGORIES.map((option) => (
          <ListItemButton
            key={option}
            selected={category === option}
            onClick={() => {
              setCategory(option);
              setDrawerOpen(false);
            }}
            sx={{ borderRadius: 1 }}
          >
            <ListItemText primary={option} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Price
      </Typography>
      <RadioGroup value={sort} onChange={(e) => setSort(e.target.value)}>
        <FormControlLabel value="default" control={<Radio size="small" />} label="Featured" />
        <FormControlLabel value="price-asc" control={<Radio size="small" />} label="Low to High" />
        <FormControlLabel value="price-desc" control={<Radio size="small" />} label="High to Low" />
      </RadioGroup>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          color: "#fff",
          py: { xs: 8, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}>
            Shop Our Products
          </Typography>
          <Typography sx={{ mt: 2, opacity: 0.85 }}>
            Everything in the collection, in one place. Find what you love.
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
              mt: 4,
              maxWidth: 640,
              mx: "auto",
              display: "flex",
              gap: 1,
              bgcolor: "background.paper",
              borderRadius: 999,
              p: 0.5,
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
          >
            <TextField
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 999, px: 1 },
                "& fieldset": { border: "none" },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button type="submit" variant="contained" sx={{ flexShrink: 0 }}>
              Search
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ display: { xs: "block", md: "none" }, mb: 3 }}>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={() => setDrawerOpen(true)}
          >
            Filters
          </Button>
        </Box>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{ display: { md: "none" } }}
        >
          <Box sx={{ width: 280, p: 3 }}>{filters}</Box>
        </Drawer>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid size={{ md: 3 }} sx={{ display: { xs: "none", md: "block" } }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                position: "sticky",
                top: 88,
                boxShadow: "0 1px 3px rgba(17, 24, 39, 0.08)",
              }}
            >
              {filters}
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            {loading ? (
              <Grid container spacing={{ xs: 2, md: 3 }}>
                {Array.from({ length: 6 }).map((_, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <ProductCardSkeleton />
                  </Grid>
                ))}
              </Grid>
            ) : visibleProducts.length === 0 ? (
              <Box
                sx={{
                  py: 10,
                  textAlign: "center",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: "0 1px 3px rgba(17, 24, 39, 0.08)",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  No products found
                </Typography>
                <Typography color="text.secondary">
                  {query
                    ? `Nothing matches "${query}" — try a different search.`
                    : `Nothing in ${category} just yet — try another category.`}
                </Typography>
              </Box>
            ) : (
              <Grid container spacing={{ xs: 2, md: 3 }}>
                {visibleProducts.map((product) => (
                  <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}
