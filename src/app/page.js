import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: { xs: 8, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 640 }}>
            <Typography
              variant="overline"
              sx={{ color: "secondary.main", letterSpacing: "0.2em" }}
            >
              New Season Edit
            </Typography>
            <Typography
              variant="h1"
              sx={{ mt: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
            >
              Timeless pieces, made for everyday.
            </Typography>
            <Typography sx={{ mt: 3, fontSize: "1.125rem", opacity: 0.75 }}>
              Considered clothing and accessories in natural fabrics — designed
              to be worn now and kept for years.
            </Typography>
            <Button
              href="/products"
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 5 }}
            >
              Shop Now
            </Button>
          </Box>
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
