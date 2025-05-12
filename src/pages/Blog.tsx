
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Ege Mutfağından Yaz Lezzetleri",
    excerpt: "Yaz aylarında sofralarımızı süsleyen, mevsiminde taze ürünlerle hazırlanan Ege mutfağının en özel tarifleri...",
    image: "https://images.unsplash.com/photo-1625944525200-77c39d739d4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "10 Haziran 2024",
    readingTime: "5 dk",
    category: "tarifler"
  },
  {
    id: 2,
    title: "Gündoğan'da Keşfedilecek 10 Yer",
    excerpt: "Bodrum'un saklı cenneti Gündoğan'da plajlar, koylar ve mutlaka görülmesi gereken noktalar...",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "25 Mayıs 2024",
    readingTime: "7 dk",
    category: "gezi"
  },
  {
    id: 3,
    title: "Zeytinyağının Faydaları ve Doğru Kullanımı",
    excerpt: "Ege mutfağının vazgeçilmezi zeytinyağının sağlık faydaları, mutfakta doğru kullanımı ve kaliteli zeytinyağını nasıl anlarsınız...",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "3 Mayıs 2024",
    readingTime: "6 dk",
    category: "sağlık"
  },
  {
    id: 4,
    title: "Bodrum'da Villa Tatili İçin İpuçları",
    excerpt: "Villa kiralayarak Bodrum tatilinizi daha keyifli hale getirmenin yolları, dikkat edilmesi gerekenler...",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "18 Nisan 2024",
    readingTime: "8 dk",
    category: "tatil"
  },
  {
    id: 5,
    title: "El Açması Mantının Püf Noktaları",
    excerpt: "Ev yapımı mantının incelikleri, hamur açma teknikleri ve lezzetli iç harcı hazırlamanın sırları...",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "5 Nisan 2024",
    readingTime: "10 dk",
    category: "tarifler"
  },
  {
    id: 6,
    title: "Çakıltaşı'nda Gün Batımı Fotoğrafçılığı",
    excerpt: "Gündoğan koyundaki muhteşem gün batımını fotoğraflamanın teknik detayları...",
    image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "22 Mart 2024",
    readingTime: "4 dk",
    category: "fotoğrafçılık"
  },
];

const categories = [
  { id: "all", name: "Tümü" },
  { id: "tarifler", name: "Tarifler" },
  { id: "gezi", name: "Gezi Rehberi" },
  { id: "sağlık", name: "Sağlık" },
  { id: "tatil", name: "Tatil İpuçları" },
  { id: "fotoğrafçılık", name: "Fotoğrafçılık" },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Blog</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Ege lezzetleri, Bodrum yaşamı ve daha fazlası
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
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

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readingTime}
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {categories.find(c => c.id === post.category)?.name}
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-xl font-bold mb-3 text-restaurant-charcoal">
                    <Link to={`/blog/${post.id}`} className="hover:text-restaurant-burgundy transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Button asChild variant="outline" className="border-restaurant-burgundy text-restaurant-burgundy hover:bg-restaurant-burgundy/10">
                    <Link to={`/blog/${post.id}`}>Devamını Oku</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-restaurant-cream p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-4 text-center text-restaurant-charcoal">Blog Bültenimize Abone Olun</h3>
            <p className="text-gray-700 text-center mb-6">
              En yeni tarifler, Ege mutfağının sırları ve Gündoğan'daki yaşam hakkında bilgileri almak için bültenimize abone olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-grow border-gray-300 rounded-lg px-4 py-2"
              />
              <Button className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white whitespace-nowrap">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
