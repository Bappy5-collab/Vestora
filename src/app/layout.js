import { Inter, Playfair_Display } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import { CartProvider } from "@/context/CartContext";
import LayoutShell from "@/components/LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Vestora — Modern Fashion Store",
  description: "Curated clothing and accessories for everyday style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <ThemeRegistry>
          <CartProvider>
            <LayoutShell>{children}</LayoutShell>
          </CartProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
