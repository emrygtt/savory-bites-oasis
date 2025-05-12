
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-restaurant-cream mb-6 leading-tight">
          Çakıltaşı <span className="text-restaurant-gold">Beach</span>
        </h1>
        <p className="text-lg md:text-xl text-restaurant-cream/90 max-w-2xl mx-auto mb-8">
          Ege'nin kalbinde doğal lezzetlerin adresi. Denize sıfır konumda restoran, beach ve villa hizmetleri.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white border-2 border-restaurant-burgundy px-8 py-6">
            <Link to="/menu">Menüyü Görüntüle</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent text-white border-2 border-restaurant-cream hover:bg-restaurant-cream/20 px-8 py-6">
            <Link to="/contact">Rezervasyon Yap</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
