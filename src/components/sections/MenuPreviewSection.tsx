
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getPageContent, ContentSection, initializeContent } from "@/utils/contentManager";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuPreviewSection = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      name: "Mantı",
      description: "El açması hamur, bol sarımsaklı yoğurt ve kızgın tereyağı sosuyla",
      price: "180 TL",
      image: "https://images.unsplash.com/photo-1625944525200-77c39d739d4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Çi Börek",
      description: "Taze açılmış hamur ve içinde özel hazırlanan kıyma harcı ile",
      price: "140 TL",
      image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Kabak Çiçeği Dolması",
      description: "Sabahın ilk ışığında toplanan çiçeklerle hazırlanan zeytinyağlı lezzet",
      price: "160 TL",
      image: "https://images.unsplash.com/photo-1625944525257-2d3c5a722258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ]);

  useEffect(() => {
    // Initialize content if needed
    initializeContent();
    
    // Try to get content from favori_lezzetler page
    const content = getPageContent("favori_lezzetler");
    if (content) {
      const dishSections = content.sections.filter(s => 
        ["manti", "ciborek", "kabak", "ciger"].includes(s.id)
      );
      
      if (dishSections.length > 0) {
        const mappedItems: MenuItem[] = dishSections.slice(0, 3).map(section => ({
          name: section.title.split('–')[0].trim(),
          description: section.content.split('.')[0] + '.',
          price: "Menü'de", // Placeholder price
          image: section.imageUrl || ""
        }));
        
        if (mappedItems.length > 0) {
          setMenuItems(mappedItems);
        }
      }
    }
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Favori Lezzetlerimiz</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Çakıltaşı'na gelenlerin asla vazgeçemediği özel tatlar
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-restaurant-cream rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-restaurant-charcoal">{item.name}</h3>
                  <span className="text-restaurant-burgundy font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white px-8">
            <Link to="/favori-lezzetlerimiz">Tüm Favori Lezzetler</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;
