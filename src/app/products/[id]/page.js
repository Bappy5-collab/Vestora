import { Container, Typography } from "@mui/material";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h1" gutterBottom>
        Product #{id}
      </Typography>
      <Typography color="text.secondary">
        Gallery, size picker and add to cart coming soon.
      </Typography>
    </Container>
  );
}
