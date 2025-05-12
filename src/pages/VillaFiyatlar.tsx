
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VillaFiyatlar = () => {
  const seasons = [
    {
      name: "Düşük Sezon",
      period: "1 Kasım - 30 Nisan",
      price: "₺4,500",
      description: "Günlük fiyat (minimum 3 gece)",
      features: [
        "Havuz ısıtma opsiyonel (ekstra ücretli)",
        "Tüm villalar için geçerli"
      ]
    },
    {
      name: "Orta Sezon",
      period: "1 Mayıs - 15 Haziran & 15 Eylül - 31 Ekim",
      price: "₺6,500",
      description: "Günlük fiyat (minimum 5 gece)",
      features: [
        "Havuz ısıtma dahil değil",
        "Çakıltaşı Beach'te şezlong ayrıcalığı"
      ]
    },
    {
      name: "Yüksek Sezon",
      period: "16 Haziran - 14 Eylül",
      price: "₺9,500",
      description: "Günlük fiyat (minimum 7 gece)",
      features: [
        "Çakıltaşı Beach'te öncelikli şezlong rezervasyonu",
        "Haftalık temizlik hizmeti dahil"
      ]
    }
  ];

  const additionalInfo = [
    "Fiyatlarımıza KDV dahildir",
    "Temizlik ücreti bir defaya mahsus 1.500₺'dir",
    "Depozito: 5.000₺ (çıkışta hasar kontrolü sonrası iade edilir)",
    "Elektrik, su ve Wi-Fi ücretleri dahildir",
    "Rezervasyon için %30 ön ödeme gereklidir",
    "Evcil hayvan kabul edilmemektedir",
    "Villalar maksimum 6 kişiliktir"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Villa Fiyatları</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            2025 yılı güncel konaklama fiyatlarımız
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-12 text-lg text-center">
              Çakıltaşı villalarımız için sezonal fiyatlandırma uyguluyoruz. Tüm fiyatlarımıza KDV dahildir ve villalarımız en fazla 6 kişi kapasitelidir.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {seasons.map((season, index) => (
                <div key={index} className={`rounded-lg overflow-hidden shadow-md ${
                  index === 2 ? 'border-2 border-restaurant-gold' : 'border border-gray-200'
                }`}>
                  <div className={`p-6 ${
                    index === 0 ? 'bg-blue-50' : 
                    index === 1 ? 'bg-green-50' :
                    'bg-restaurant-burgundy/10'
                  }`}>
                    <h3 className="font-serif text-xl font-bold mb-2 text-restaurant-charcoal">{season.name}</h3>
                    <p className="text-gray-600 text-sm">{season.period}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-restaurant-burgundy">{season.price}</p>
                      <p className="text-gray-600 text-sm">{season.description}</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {season.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-700">• {feature}</li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white">
                      <Link to="/rezervasyon-formu">Rezervasyon Yap</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-restaurant-cream p-6 rounded-lg mb-8">
              <h3 className="font-serif text-xl font-bold mb-4 text-restaurant-charcoal">Ek Bilgiler</h3>
              <ul className="space-y-2">
                {additionalInfo.map((info, index) => (
                  <li key={index} className="text-gray-700">• {info}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-serif text-xl font-bold mb-4 text-restaurant-charcoal">Özel Dönem İndirimleri</h3>
              <p className="text-gray-700 mb-2">
                <strong>%10 Erken Rezervasyon İndirimi:</strong> 3 ay öncesinden yapılan rezervasyonlarda geçerlidir.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>%15 Uzun Dönem İndirimi:</strong> 14 gece ve üzeri konaklamalarda geçerlidir.
              </p>
              <p className="text-gray-700">
                <strong>%5 Tekrar Gelen Misafir İndirimi:</strong> Daha önce villalarımızda konaklayan misafirlerimiz için geçerlidir.
              </p>
              <p className="text-gray-600 text-sm mt-2 italic">* İndirimler birleştirilemez, en yüksek indirim oranı geçerlidir.</p>
            </div>
            
            <div className="flex justify-center">
              <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white px-8">
                <Link to="/rezervasyon-formu">Rezervasyon Talebi Oluştur</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VillaFiyatlar;
