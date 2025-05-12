
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Hakkimizda from "./pages/Hakkimizda";
import BeachPage from "./pages/BeachPage";
import BeachGallery from "./pages/BeachGallery";
import VillaOzellikleri from "./pages/VillaOzellikleri";
import VillaFiyatlar from "./pages/VillaFiyatlar";
import RezervasyonFormu from "./pages/RezervasyonFormu";
import FavoriLezzetler from "./pages/FavoriLezzetler";
import Misafirlerimizden from "./pages/Misafirlerimizden";
import Blog from "./pages/Blog";
import RestaurantGallery from "./pages/RestaurantGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/galeri" element={<RestaurantGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/beach" element={<BeachPage />} />
          <Route path="/plaj-galerisi" element={<BeachGallery />} />
          <Route path="/villa-ozellikleri" element={<VillaOzellikleri />} />
          <Route path="/fiyatlar" element={<VillaFiyatlar />} />
          <Route path="/rezervasyon-formu" element={<RezervasyonFormu />} />
          <Route path="/favori-lezzetlerimiz" element={<FavoriLezzetler />} />
          <Route path="/misafirlerimizden" element={<Misafirlerimizden />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
