// Placeholder catalogue. Swap this out for a real API or CMS later —
// the rest of the app only depends on the shape of these objects.
// gallery = extra shots for the product details page
const products = [
  {
    id: "essential-cotton-tee",
    name: "Essential Cotton Tee",
    price: 28,
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Washed navy canvas with a padded laptop sleeve and enough room for a change of clothes.",
    rating: 4.2,
    reviewCount: 73,
    colors: ["Navy", "Olive"],
    sizes: ["One Size"],
    inStock: true,
    featured: false,
  },
  {
    id: "chunky-cable-knit-sweater",
    name: "Chunky Cable-Knit Sweater",
    price: 84,
    category: "Knitwear",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A heavyweight cable knit in soft lambswool, roomy through the body with a folded crew collar.",
    rating: 4.6,
    reviewCount: 58,
    colors: ["Oatmeal", "Forest"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
  },
  {
    id: "quilted-puffer-jacket",
    name: "Quilted Puffer Jacket",
    price: 148,
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A boxy puffer filled with recycled down, warm enough for deep winter without the bulk.",
    rating: 4.5,
    reviewCount: 112,
    colors: ["Black", "Moss"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    featured: false,
  },
  {
    id: "slim-selvedge-jeans",
    name: "Slim Selvedge Jeans",
    price: 98,
    category: "Bottoms",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Raw selvedge denim in a slim taper that breaks in and fades to match the way you wear it.",
    rating: 4.4,
    reviewCount: 86,
    colors: ["Indigo", "Washed Black"],
    sizes: ["28", "30", "32", "34", "36"],
    inStock: true,
    featured: false,
  },
  {
    id: "suede-chelsea-boots",
    name: "Suede Chelsea Boots",
    price: 165,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Classic Chelsea boots in tan suede with elastic side panels and a stacked rubber heel.",
    rating: 4.7,
    reviewCount: 94,
    colors: ["Tan", "Dark Brown"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    inStock: true,
    featured: false,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export default products;
