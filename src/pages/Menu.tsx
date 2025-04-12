
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const menuCategories = [
  { id: "starters", name: "Starters" },
  { id: "main-courses", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
];

const menuItems = {
  starters: [
    {
      name: "Bruschetta",
      description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Calamari Fritti",
      description: "Crispy fried calamari served with lemon aioli and marinara sauce",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Mushroom Arancini",
      description: "Crispy risotto balls stuffed with wild mushrooms and mozzarella, served with truffle aioli",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1525184782-3bb0b3a2eefc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
  ],
  "main-courses": [
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
    },
    {
      name: "Eggplant Parmesan",
      description: "Layers of breaded eggplant, marinara sauce, and melted mozzarella with fresh basil",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
  ],
  desserts: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Crème Brûlée",
      description: "Rich custard topped with a layer of hardened caramelized sugar",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
  ],
  beverages: [
    {
      name: "Signature Cocktails",
      description: "Ask your server about our rotating selection of handcrafted cocktails",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Wine Selection",
      description: "Curated selection of red, white, and sparkling wines from around the world",
      price: "From $9.99",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Artisanal Coffee",
      description: "Locally roasted specialty coffee served in various styles",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Exquisite dishes crafted with passion and the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-restaurant-cream">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue="starters"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/50 p-1">
                {menuCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id}
                    value={category.id}
                    className="px-6 py-3 data-[state=active]:bg-restaurant-burgundy data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {menuItems[category.id as keyof typeof menuItems].map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                    >
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-xl font-bold text-restaurant-charcoal">{item.name}</h3>
                            <span className="text-restaurant-burgundy font-semibold">{item.price}</span>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
