import { Container, Typography } from "@mui/material";

export default function CartPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h1" gutterBottom>
        Your Cart
      </Typography>
      <Typography color="text.secondary">
        Cart items and order summary coming soon.
      </Typography>
    </Container>
  );
}
