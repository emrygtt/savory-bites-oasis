
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const VillaOzellikleri = () => {
  const features = [
    "Özel yüzme havuzu",
    "Geniş ve ferah yaşam alanları",
    "Tam donanımlı mutfak",
    "Klima",
    "Ücretsiz Wi-Fi",
    "Bahçe mobilyaları",
    "Barbekü alanı",
    "Çamaşır makinesi",
    "Bulaşık makinesi",
    "LCD TV",
    "Ütü ve ütü masası",
    "Saç kurutma makinesi",
    "Ücretsiz otopark"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Villa Özellikleri</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Konforlu ve lüks villalarımızın sunduğu imkanlar
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-8 text-lg">
              Bodrum'un doğal güzellikleriyle öne çıkan gözde tatil beldesi Gündoğan'da, kalabalıktan uzak ama her şeye yakın bir tatil deneyimi arıyorsanız, Çakıltaşı'nın villa kiralama hizmeti tam size göre. Gündoğan sahiline yürüme mesafesinde yer alan, doğayla iç içe konumda bulunan 5 adet özel havuzlu ve bahçeli kiralık villamız, sizlere hem konforlu hem de unutulmaz bir konaklama sunuyor.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Villa Dış Görünüm" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Villa İç Mekan" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
            
            <p className="text-gray-700 mb-8 text-lg">
              Her bir villa, modern mimarisi ve kullanışlı iç tasarımı ile hem kısa süreli tatiller hem de uzun süreli konaklamalar için uygundur. Tam donanımlı mutfaklar, geniş salonlar, konforlu yatak odaları ve her villaya ait özel yüzme havuzu ile tatilinizi ev rahatlığında geçirmenizi sağlıyoruz.
            </p>
            
            <h3 className="font-serif text-2xl font-bold mb-6 text-restaurant-charcoal">Villa Özellikleri</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-restaurant-burgundy mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-restaurant-cream p-6 rounded-lg mb-8">
              <h3 className="font-serif text-xl font-bold mb-4 text-restaurant-charcoal">Çakıltaşı Beach Ayrıcalığı</h3>
              <p className="text-gray-700 mb-4">
                Villalarımızda konaklayan misafirlerimize özel bir ayrıcalık olarak, işletmemize ait Çakıltaşı Beach'te şezlong tahsisi yapılmaktadır. Tatiliniz boyunca denize sıfır konumda yer alan beach alanımızda gün boyu güneşin tadını çıkarabilir, serin sulara kendinizi bırakabilirsiniz.
              </p>
              <p className="text-gray-700">
                Ayrıca beach alanımıza yakın konumda bulunan kafe ve restoranımızda Ege'nin eşsiz lezzetlerini deneyimleyerek tatilinizi daha da keyifli hale getirebilirsiniz.
              </p>
            </div>
            
            <p className="text-gray-700 mb-8 text-center text-lg font-medium">
              Gündoğan'da özel havuzlu kiralık villa arayışındaysanız, Çakıltaşı size sadece konaklama değil, doğa, deniz ve lezzetle iç içe bir tatil sunar. Her şeyin düşünüldüğü bu özel deneyim için hemen bizimle iletişime geçin, yerinizi ayırtın.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white">
                <Link to="/fiyatlar">Fiyatları Görüntüle</Link>
              </Button>
              <Button asChild variant="outline" className="border-restaurant-burgundy text-restaurant-burgundy hover:bg-restaurant-burgundy/10">
                <Link to="/rezervasyon-formu">Rezervasyon Yap</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Images */}
      <section className="py-12 bg-restaurant-cream">
        <div className="container mx-auto px-4">
          <h3 className="font-serif text-2xl font-bold mb-8 text-center text-restaurant-charcoal">Villa Görselleri</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Villa Görünümü" className="rounded-lg shadow-md aspect-video object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Villa İç Mekan" className="rounded-lg shadow-md aspect-video object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Villa Havuz" className="rounded-lg shadow-md aspect-video object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Villa Bahçe" className="rounded-lg shadow-md aspect-video object-cover w-full" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VillaOzellikleri;
