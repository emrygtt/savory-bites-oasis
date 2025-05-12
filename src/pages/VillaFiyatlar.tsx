
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getPageContent, PageContent, initializeContent } from "@/utils/contentManager";

const VillaFiyatlar = () => {
  const [pageData, setPageData] = useState<PageContent | null>(null);

  useEffect(() => {
    // Initialize content if needed
    initializeContent();
    
    // Load page content
    const content = getPageContent("fiyatlar");
    setPageData(content);
  }, []);

  if (!pageData) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <p>Yükleniyor...</p>
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
