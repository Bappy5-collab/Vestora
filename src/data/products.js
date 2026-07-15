// Placeholder catalogue. Swap this out for a real API or CMS later —
// the rest of the app only depends on the shape of these objects.
const products = [
  {
    id: "essential-cotton-tee",
    name: "Essential Cotton Tee",
    price: 28,
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description:
      "A midweight crewneck cut from combed organic cotton. The one you reach for on the way out the door.",
    rating: 4.6,
    reviewCount: 128,
    colors: ["White", "Black", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: true,
  },
  {
    id: "garment-dyed-pocket-tee",
    name: "Garment-Dyed Pocket Tee",
    price: 34,
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    description:
      "Dyed after stitching for a softly faded finish, with a chest pocket and a relaxed shoulder.",
    rating: 4.3,
    reviewCount: 64,
    colors: ["Sage", "Sand"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    featured: false,
  },
  {
    id: "brushed-fleece-sweatshirt",
    name: "Brushed Fleece Sweatshirt",
    price: 62,
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    description:
      "Loopback fleece brushed on the inside, with ribbed cuffs that hold their shape after every wash.",
    rating: 4.7,
    reviewCount: 91,
    colors: ["White", "Grey Marl"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: true,
  },
  {
    id: "fringed-knit-poncho",
    name: "Fringed Knit Poncho",
    price: 96,
    category: "Knitwear",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    description:
      "An open-weave poncho in undyed cream wool, finished by hand with a tasselled fringe.",
    rating: 4.4,
    reviewCount: 37,
    colors: ["Cream"],
    sizes: ["One Size"],
    inStock: true,
    featured: true,
  },
  {
    id: "belted-trench-coat",
    name: "Belted Trench Coat",
    price: 189,
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    description:
      "A longline trench in powder blue with a tie waist and a water-resistant cotton shell.",
    rating: 4.8,
    reviewCount: 52,
    colors: ["Powder Blue", "Stone"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    featured: true,
  },
  {
    id: "pastel-court-sneakers",
    name: "Pastel Court Sneakers",
    price: 120,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    description:
      "A low-profile court silhouette in colour-blocked pastel leather, set on a cushioned foam sole.",
    rating: 4.5,
    reviewCount: 210,
    colors: ["Pastel", "Triple White"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: false,
    featured: true,
  },
  {
    id: "structured-leather-handbag",
    name: "Structured Leather Handbag",
    price: 245,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description:
      "A top-handle bag in polished coral leather, with a turn-lock clasp and a detachable strap.",
    rating: 4.9,
    reviewCount: 45,
    colors: ["Coral", "Black"],
    sizes: ["One Size"],
    inStock: true,
    featured: true,
  },
  {
    id: "canvas-everyday-backpack",
    name: "Canvas Everyday Backpack",
    price: 78,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description:
      "Washed navy canvas with a padded laptop sleeve and enough room for a change of clothes.",
    rating: 4.2,
    reviewCount: 73,
    colors: ["Navy", "Olive"],
    sizes: ["One Size"],
    inStock: true,
    featured: false,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export default products;
