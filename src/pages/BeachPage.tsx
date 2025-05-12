
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BeachPage = () => {
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
        <div className="absolute inset-0 bg-restaurant-charcoal/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Çakıltaşı Beach</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Gündoğan Sahilinde Huzurla Buluşun
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 text-lg">
              Bodrum'un kalbinde ama kalabalığından uzakta, Gündoğan sahilinin en doğal noktasında yer alan Çakıltaşı Beach, gün boyu denizin ve Ege mutfağının keyfini çıkarabileceğiniz sakin ve kaliteli bir sahil deneyimi sunar.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              Denize sıfır konumdaki şezlonglarımız, sabahın ilk ışıklarıyla birlikte sizi hafif bir esinti eşliğinde selamlar. Giriş ücreti almıyoruz; sadece Temmuz ve Ağustos aylarında yeme-içme üzerine minimum harcama uygulamamız bulunuyor. Bunun dışında, ekstra servis ücreti de alınmamaktadır.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Çakıltaşı Beach" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Çakıltaşı Beach" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
            
            <p className="text-gray-700 mb-6 text-lg">
              İster güne taze demlenmiş bir kahveyle başlayın, ister kitabınızı alın ve gölgede dinlenmenin tadını çıkarın. Sahil alanımızda restoran menümüz geçerlidir; ayrı bir beach menüsü bulunmaz.
              Menümüzde ise ev yapımı limonatalar, buz gibi içecekler, hafif kahvaltı seçenekleri ve özenle hazırlanmış meze tabakları gibi birçok lezzetli ve taze alternatif yer alır.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              Günün ilerleyen saatlerinde Gündoğan'ın berrak denizinde serinledikten sonra sahil masalarımıza geçerek Ege'nin en sevilen tatlarıyla buluşabilirsiniz.
              Zeytinyağlılar, günlük tazelikte hazırlanan yemekler ve sıcak misafirperverliğimizle kendinizi yazlık evinizde gibi hissedeceksiniz.
            </p>
            
            <div className="bg-restaurant-cream p-6 rounded-lg mb-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-restaurant-charcoal">Çakıltaşı Beach'te Sizi Neler Bekliyor?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Gündoğan sahilinde denize sıfır huzurlu bir konum</li>
                <li>Giriş ücreti yok</li>
                <li>Temmuz ve Ağustos'ta minimum harcama uygulaması</li>
                <li>Ekstra servis ücreti alınmaz</li>
                <li>Restoran menüsü geçerlidir (ayrı beach menüsü yoktur)</li>
                <li>Şezlong & şemsiye hizmeti – sınırlı kapasite, sakinlik garantili</li>
                <li>Hafif müzik eşliğinde gürültüsüz bir atmosfer</li>
                <li>Gün batımında Ege ezgileriyle keyifli akşamlar</li>
                <li>Evcil hayvan kabul edilmemektedir</li>
                <li>Plaj için rezervasyon zorunludur</li>
              </ul>
            </div>
            
            <h3 className="font-serif text-2xl font-bold mb-4 text-restaurant-charcoal">Sakinlik Arayanların Adresi</h3>
            <p className="text-gray-700 mb-8 text-lg">
              Google'da "Gündoğan beach kafe", "denize sıfır Bodrum restoranı" ya da "Ege mutfağı sahilde" gibi kelimeleri arattıysanız, tam da aradığınız yeri buldunuz.
              Çakıltaşı Beach; kalabalıklardan uzak, nezih ve içten bir Ege deneyimi arayanlar için Gündoğan'da sizi bekliyor.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white">
                <Link to="/plaj-galerisi">Plaj Galerisini Görüntüle</Link>
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

export default BeachPage;
