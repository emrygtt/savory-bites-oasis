
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Beach view",
    category: "beach"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Sunrise at the beach",
    category: "beach"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Beach umbrellas",
    category: "facilities"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Beach chairs",
    category: "facilities"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Beach sunset",
    category: "sunset"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600177897995-e67c73ed44e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Beach loungers",
    category: "facilities"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Beach cafe",
    category: "facilities"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Beach view",
    category: "beach"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Beach sunset",
    category: "sunset"
  },
];

// Categories
const categories = [
  { id: "all", name: "Tümü" },
  { id: "beach", name: "Plaj" },
  { id: "facilities", name: "Tesisler" },
  { id: "sunset", name: "Gün Batımı" },
];

const BeachGallery = () => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Plaj Galerisi</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Çakıltaşı Beach'in büyüleyici manzaraları
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

export default BeachGallery;
