
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getPageContent, PageContent } from "@/utils/contentManager";
import { Loader2 } from "lucide-react";

const VillaFiyatlar = () => {
  const [pageData, setPageData] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        // Use async version to be ready for backend API
        const content = await getPageContent("fiyatlar");
        setPageData(content);
      } catch (error) {
        console.error("Error loading page content:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Loader2 size={24} className="animate-spin text-restaurant-burgundy" />
            <p>Yükleniyor...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!pageData) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <p>İçerik bulunamadı</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            {pageData.sections.find(s => s.id === "intro")?.title || "Villa Kiralama Fiyatları"}
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Çakıltaşı Villa Kiralama Hizmeti
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-8 text-lg">
              {pageData.sections.find(s => s.id === "intro")?.content}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Low Season */}
              <div className="bg-restaurant-cream p-6 rounded-lg">
                <h3 className="font-serif text-2xl font-bold mb-4 text-restaurant-charcoal">
                  {pageData.sections.find(s => s.id === "low-season")?.title}
                </h3>
                <div className="whitespace-pre-line">
                  {pageData.sections.find(s => s.id === "low-season")?.content}
                </div>
              </div>
              
              {/* High Season */}
              <div className="bg-restaurant-cream p-6 rounded-lg">
                <h3 className="font-serif text-2xl font-bold mb-4 text-restaurant-charcoal">
                  {pageData.sections.find(s => s.id === "high-season")?.title}
                </h3>
                <div className="whitespace-pre-line">
                  {pageData.sections.find(s => s.id === "high-season")?.content}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-restaurant-cream p-6 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4 text-restaurant-charcoal">
                {pageData.sections.find(s => s.id === "details")?.title}
              </h3>
              <div className="whitespace-pre-line">
                {pageData.sections.find(s => s.id === "details")?.content}
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white">
                <Link to="/rezervasyon-formu">Rezervasyon Yap</Link>
              </Button>
              <Button asChild variant="outline" className="border-restaurant-burgundy text-restaurant-burgundy hover:bg-restaurant-burgundy/10">
                <Link to="/villa-ozellikleri">Villa Özellikleri</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VillaFiyatlar;
