import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: 1,
        borderColor: "divider",
        transition: "transform 200ms ease, box-shadow 200ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
        "&:hover .product-card-image": {
          transform: "scale(1.05)",
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
        </CardMedia>

        <CardContent sx={{ flexGrow: 1, width: "100%" }}>
          <Chip
            label={product.category}
            size="small"
            variant="outlined"
            sx={{ mb: 1.5, textTransform: "uppercase", letterSpacing: "0.08em" }}
          />
          <Typography variant="h6" component="h3" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
