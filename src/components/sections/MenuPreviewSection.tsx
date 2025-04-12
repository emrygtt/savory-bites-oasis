
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Truffle Risotto",
    description: "Arborio rice cooked to perfection with wild mushrooms and truffle oil",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1625944525200-77c39d739d4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Pan-Seared Salmon",
    description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Beef Wellington",
    description: "Tender filet mignon wrapped in puff pastry with mushroom duxelles",
    price: "$32.99",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const MenuPreviewSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Popular Dishes</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A taste of our signature creations that have captivated our guests' palates
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
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;
