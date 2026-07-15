import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductDetails from "@/components/ProductDetails";
import products from "@/data/products";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            py: 8,
            px: 3,
            textAlign: "center",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Product not found
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            We couldn&apos;t find a product matching &quot;{id}&quot;. It may have
            been removed or the link is wrong.
          </Typography>
          <Button href="/products" variant="contained">
            Back to Products
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Button
        href="/products"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3, color: "text.secondary" }}
      >
        Back to products
      </Button>
      <ProductDetails product={product} />
    </Container>
  );
}
