
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Restaurant interior",
    category: "interior"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Gourmet dish plating",
    category: "food"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Chef preparing food",
    category: "chef"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Elegant table setting",
    category: "interior"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Freshly prepared dish",
    category: "food"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560611588-163f295eb145?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Mixologist preparing cocktail",
    category: "drinks"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Dessert presentation",
    category: "food"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Bar area",
    category: "interior"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Staff working",
    category: "staff"
  },
];

// Categories
const categories = [
  { id: "all", name: "Tümü" },
  { id: "food", name: "Yemekler" },
  { id: "interior", name: "İç Mekan" },
  { id: "chef", name: "Şef" },
  { id: "drinks", name: "İçecekler" },
  { id: "staff", name: "Ekibimiz" },
];

const RestaurantGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const previousIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[previousIndex].id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Restoran Galerisi</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Lezzetlerimiz ve mekanımızdan kareler
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-restaurant-burgundy text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div 
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-restaurant-charcoal border-none p-0 overflow-hidden">
                  <div className="relative">
                    <button 
                      className="absolute top-2 right-2 p-2 bg-restaurant-charcoal/50 rounded-full text-white hover:bg-restaurant-charcoal/80 z-10"
                      onClick={() => setSelectedImage(null)}
                    >
                      <X size={20} />
                    </button>
                    <img 
                      src={galleryImages.find(img => img.id === image.id)?.src} 
                      alt={image.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <button 
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-restaurant-charcoal/50 rounded-full text-white hover:bg-restaurant-charcoal/80"
                      onClick={handlePrevious}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-restaurant-charcoal/50 rounded-full text-white hover:bg-restaurant-charcoal/80"
                      onClick={handleNext}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RestaurantGallery;
