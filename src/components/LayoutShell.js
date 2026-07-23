"use client";

import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Routes where the Navbar and Footer should be hidden.
const HIDDEN_CHROME_ROUTES = ["/chor"];

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const hideChrome = HIDDEN_CHROME_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!hideChrome && <Navbar />}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      {!hideChrome && <Footer />}
    </Box>
  );
}
