import Image from "next/image";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        boxShadow: "0 1px 3px rgba(17, 24, 39, 0.08)",
        transition: "transform 200ms ease, box-shadow 200ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 32px rgba(17, 24, 39, 0.12)",
        },
        "&:hover .product-card-image": {
          transform: "scale(1.06)",
        },
      }}
    >
      <CardActionArea
        href={`/products/${product.id}`}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <CardMedia
          sx={{
            position: "relative",
            aspectRatio: "4 / 5",
            overflow: "hidden",
            bgcolor: "background.default",
          }}
        >
          <Image
            className="product-card-image"
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
            style={{
              objectFit: "cover",
              transition: "transform 300ms ease",
            }}
          />
          <Chip
            label={product.category}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(4px)",
            }}
          />
          {!product.inStock && (
            <Chip
              label="Sold out"
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                bgcolor: "rgba(17, 24, 39, 0.8)",
                color: "#fff",
              }}
            />
          )}
        </CardMedia>

        <CardContent sx={{ flexGrow: 1, width: "100%" }}>
          <Typography variant="h6" component="h3" noWrap>
            {product.name}
          </Typography>
          <Stack direction="row" spacing={0.5} sx={{ mt: 0.5, alignItems: "center" }}>
            <Rating value={product.rating} precision={0.5} readOnly size="small" />
            <Typography variant="caption" color="text.secondary">
              ({product.reviewCount})
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ mt: 1.5, alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="h6" color="primary.main">
              ${product.price.toFixed(2)}
            </Typography>
            <Box
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                bgcolor: "background.default",
                fontSize: 13,
                fontWeight: 600,
                color: "text.secondary",
              }}
            >
              View
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
