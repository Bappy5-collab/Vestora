import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ProductCard from "@/components/ProductCard";
import products, { featuredProducts } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          color: "#fff",
          py: { xs: 5, md: 6 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
            top: -120,
            right: -80,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.06)",
            bottom: -100,
            left: -60,
          }}
        />

        <Container maxWidth={false} sx={{ position: "relative", px: { xs: 2, md: 6 } }}>
          <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ pl: { md: 8 } }}>
              <Typography
                variant="h1"
                sx={{ mt: 2, fontSize: { xs: "2.25rem", md: "3rem" } }}
              >
                Timeless pieces, made for everyday.
              </Typography>
              <Typography sx={{ mt: 2, fontSize: "1.125rem", opacity: 0.85 }}>
                Considered clothing and accessories in natural fabrics — designed
                to be worn now and kept for years.
              </Typography>

              <Box
                component="form"
                action="/products"
                sx={{
                  mt: 3,
                  display: "flex",
                  gap: 1,
                  maxWidth: 460,
                  bgcolor: "#fff",
                  borderRadius: 999,
                  p: 0.5,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                <TextField
                  name="q"
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

              <Stack direction="row" spacing={3} sx={{ mt: 3, flexWrap: "wrap", rowGap: 1 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <StarIcon sx={{ fontSize: 18, color: "#FBBF24" }} />
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    4.8 average rating
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <LocalShippingOutlinedIcon sx={{ fontSize: 18 }} />
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    Free shipping over $75
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  position: "relative",
                  maxWidth: 400,
                  mx: "auto",
                  ml: { md: "auto" },
                  mr: { md: 2 },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80"
                    alt="New season collection"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    bottom: 20,
                    left: -16,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    color: "text.primary",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {products.length}+ Products
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    New arrivals every week
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack
          direction="row"
          sx={{
            mb: 4,
            gap: 2,
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
            >
              Featured Products
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              A short edit of the pieces we are loving right now.
            </Typography>
          </Box>
          <Button
            href="/products"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{ display: { xs: "none", sm: "inline-flex" }, flexShrink: 0 }}
          >
            View all
          </Button>
        </Stack>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {featuredProducts.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
