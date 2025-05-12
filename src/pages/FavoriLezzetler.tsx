
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const dishes = [
  {
    name: "Mantı",
    description: "Ege usulüyle, bol sarımsaklı yoğurt ve tereyağ sosuyla. Ev yapımı mantımız, incecik açılmış hamuru ve bol iç harcıyla, klasik tatları özleyenlerin favorisi. Üzerine dökülen kızgın tereyağı ve sarımsaklı yoğurduyla, deniz kenarında bambaşka bir deneyime dönüşüyor.",
    image: "https://images.unsplash.com/photo-1625944525200-77c39d739d4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    tagline: "Bodrum'da mantı nerede yenir? diyenlerin cevabı: Çakıltaşı."
  },
  {
    name: "Çi Börek",
    description: "İç harcı bol, dışı altın rengi çıtır çıtır! Her sabah taze açılan hamurla hazırladığımız çiğ börek, özellikle kahvaltıdan akşama kadar günün her saatinde çok seviliyor. Yanında bir bardak çayla, yazlık ev keyfi garantili.",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    tagline: "Gündoğan'da çiğ börek yapan yerler arasında müdavimlerin vazgeçilmezi."
  },
  {
    name: "Kabak Çiçeği Dolması",
    description: "Sadece erken saatte toplanan çiçeklerle, tazeliğini kaybetmeden hazırladığımız kabak çiçeği dolması, zeytinyağlı sevenlerin gözdesi. Hafifliğiyle, Ege mutfağının zarafetini tek lokmada hissettiriyor.",
    image: "https://images.unsplash.com/photo-1625944525257-2d3c5a722258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    tagline: "\"Kabak çiçeği dolması nerede yenir?\" diye soranlara, bir tabak bizden."
  },
  {
    name: "Ciğer Tava",
    description: "İnce dilimlenmiş, ustalıkla kızartılmış ciğerler… Yanında sumaklı soğan ve taze yeşilliklerle servis edilen bu lezzet, geleneksel sofraları özleyenleri kendine çekiyor.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3",
    tagline: "Bodrum ciğer tava önerisi arayanlara yerel, ev yapımı bir seçenek."
  }
];

const FavoriLezzetler = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Favori Lezzetlerimiz</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Çakıltaşı'na gelenlerin asla vazgeçemediği özel lezzetler
          </p>
        </div>
      </section>

      {/* Favorites Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-16">
            Ege'nin en sevilen tatlarını, denizin kenarında, ev yapımı sıcaklığında sunuyoruz. İşte Çakıltaşı'na gelenlerin asla vazgeçemediği dört özel lezzet.
          </p>

          <div className="space-y-24">
            {dishes.map((dish, index) => (
              <div key={index} className={`flex flex-col ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-restaurant-charcoal mb-4">{dish.name}</h2>
                  <p className="text-gray-700 mb-6">
                    {dish.description}
                  </p>
                  <p className="italic text-restaurant-burgundy font-medium">
                    {dish.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-gray-700 text-lg font-medium mb-6">
              Çakıltaşı'nda, her tabakta bir hikâye var. İster sahilde bir akşam yemeği, ister beach keyfinde atıştırmalık; bu dört favori lezzetimizle Ege'yi bir kez daha seveceksiniz.
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white">
                <Link to="/menu">Tüm Menüyü Görüntüle</Link>
              </Button>
              <Button asChild variant="outline" className="border-restaurant-burgundy text-restaurant-burgundy hover:bg-restaurant-burgundy/10">
                <Link to="/contact">Rezervasyon Yap</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FavoriLezzetler;
