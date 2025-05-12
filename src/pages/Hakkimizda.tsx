
import Layout from "@/components/layout/Layout";

const Hakkimizda = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553527922-767c42f16aad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Biz Kimiz</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Doğal lezzetlerin ve Ege misafirperverliğinin adresi
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-8">Ege'nin Kalbinde Doğal Lezzetlerin Adresi: Çakıltaşı Beach Kafe Restoran</h2>
            
            <p className="text-gray-700 mb-6">
              Çakıltaşı, 2010 yılında Halil Bey'in "deniz kenarında küçük, samimi bir mekan açma" hayalinin gerçeğe dönüşmesiyle Gündoğan'da kuruldu. Uzun yıllar mağazacılık sektöründe yöneticilik yapmış olan Halil Bey, aynı zamanda otelcilik geçmişine de sahipti. Dedesinden miras kalan taş zeytinyağı fabrikası, bu hayalin temel taşlarından biri oldu. Eşi Selvan Hanım ile birlikte çıktıkları bu lezzet yolculuğunda, mutfaklarında her zaman samimiyeti, kaliteyi ve doğallığı ön planda tuttular.
            </p>
            
            <p className="text-gray-700 mb-6">
              İlk yıllarda ailecek hazırladıkları ev yemekleriyle yola çıkan Çakıltaşı, kısa sürede Gündoğan halkının ve tatilcilerin favori mekanlarından biri haline geldi. İkinci yıldan itibaren bölgedeki kadınlara istihdam sağlayarak hem yerel ekonomiye katkıda bulundu hem de mutfağını daha da zenginleştirdi. Bugün ise menüsünde, yöresel tariflerden ilham alan onlarca çeşit meze, zeytinyağlı ve geleneksel yemek yer alıyor.
            </p>

            <div className="bg-restaurant-cream p-6 rounded-lg mb-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-restaurant-charcoal">Neler Sunuyoruz:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>El açması mantı, çiğ börek ve zeytinyağlı Ege yemekleri</li>
                <li>Geleneksel lezzetler: Keşkek, lokum pilavı, kabak çiçeği dolması</li>
                <li>Izgara, güveç ve zengin salata çeşitleri</li>
                <li>Organik köy kahvaltısı (mevsimlik ve doğal ürünlerle)</li>
                <li>Deniz mahsulleri (balık hariç)</li>
                <li>Taş fırında pişmiş ev yapımı baklava</li>
                <li>Butik pastalar, ev tatlıları, sağlıklı atıştırmalıklar</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              Tüm ürünlerimizde mevsiminde ve yerel kaynaklı malzemeler kullanıyoruz. Zeytinyağlı yemeklerde ise kendi bahçemizden elde ettiğimiz doğal zeytinyağını tercih ediyoruz. Mutfakta hijyen, tazelik ve kalite bizim için vazgeçilmez.
            </p>

            <p className="text-gray-700 mb-8">
              Halil Bey ve Selvan Hanım menüyü sürekli yenileyerek farklı ve özgün lezzetler sunmak için çalışmalarını sürdürüyor. Bu sayede her gelişinizde yeni bir tat, yeni bir sürpriz sizleri bekliyor.
            </p>

            <div className="bg-restaurant-burgundy/10 p-6 rounded-lg mb-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-restaurant-burgundy">Misyonumuz</h3>
              <p className="text-gray-700">
                Çakıltaşı ailesi olarak, her misafirimize anne eli değmiş gibi sıcak, sağlıklı ve unutulmaz bir sofra deneyimi sunmak en büyük önceliğimiz. Marka tescil belgeli işletmemizde, kalite, doğallık ve samimiyet ilkelerinden ödün vermeden misafir memnuniyetini en üst düzeyde tutmayı hedefliyoruz.
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Çakıltaşı Restaurant" 
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hakkimizda;
