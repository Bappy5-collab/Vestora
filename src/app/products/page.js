import { Container, Typography } from "@mui/material";

export default function ProductsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h1" gutterBottom>
        Products
      </Typography>
      <Typography color="text.secondary">
        Product grid and filters coming soon.
      </Typography>
    </Container>
  );
}
