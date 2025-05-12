
import Layout from "@/components/layout/Layout";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayşe K.",
    location: "İstanbul",
    comment: "Her yaz mutlaka birkaç kez uğradığımız, Gündoğan'ın gizli cenneti! Kabak çiçeği dolması ve mantısı için kilometrelerce yol gidilir. Temiz plajı, güleryüzlü servisi ve ev yapımı lezzetleriyle tam bir aile işletmesi.",
    rating: 5,
    date: "Ağustos 2024"
  },
  {
    id: 2,
    name: "Mehmet Y.",
    location: "İzmir",
    comment: "Bodrum'un kalabalığından kaçıp sakin bir ortamda hem denize girmek hem de güzel yemek yemek isteyenler için mükemmel. Özellikle çiğ böreğini denemenizi tavsiye ederim, bir başka!",
    rating: 5,
    date: "Temmuz 2024"
  },
  {
    id: 3,
    name: "Deniz A.",
    location: "Ankara",
    comment: "Villalarında konakladık ve beach hizmetinden de yararlandık. Her şey kusursuzdu! Ev yapımı kahvaltı ve akşam yemekleri için özellikle teşekkür ederiz. Huzurlu bir tatil arayanlar için birebir.",
    rating: 5,
    date: "Haziran 2024"
  },
  {
    id: 4,
    name: "Zeynep B.",
    location: "Bursa",
    comment: "10 yıldır her yaz geliyoruz, artık aile gibiyiz. Ev yapımı mantısı, gün batımında sahil keyfinde içilen ev limonataları... Hepsi için teşekkürler. Plajlarının temizliği ve sakinliği ise ayrı bir değer.",
    rating: 5,
    date: "Ağustos 2023"
  },
  {
    id: 5,
    name: "Okan T.",
    location: "Muğla",
    comment: "Yerel bir müşteri olarak söyleyebilirim ki, Gündoğan'ın en iyi lezzet durağı! Ciğer tava ve kabak çiçeği dolması favori yemeklerim. Beach'de şemsiye sayısı az tutulduğu için kalabalık olmuyor, bu çok değerli.",
    rating: 5,
    date: "Temmuz 2023"
  },
  {
    id: 6,
    name: "Gülşen M.",
    location: "İstanbul",
    comment: "Rezervasyon yapmadan gitmeyin! Çok popüler bir yer haline gelmiş. Biz önceden arayıp yer ayırttık ve harika bir akşam geçirdik. Şefleri ev yapımı baklava da hazırlıyor, mutlaka deneyin.",
    rating: 4,
    date: "Eylül 2023"
  },
  {
    id: 7,
    name: "Kerem S.",
    location: "Ankara",
    comment: "Villaları oldukça konforlu ve temiz. Beach'e yürüme mesafesinde olması büyük avantaj. Akşamları restoranında yemek yedik, fiyatlar Bodrum ortalamasına göre çok makul ve lezzetler ev yapımı.",
    rating: 5,
    date: "Mayıs 2024"
  },
  {
    id: 8,
    name: "Elif D.",
    location: "İzmir",
    comment: "Gündoğan sahilinde nadir bulunan huzurlu köşelerden. Çocuklu aileler için ideal. Servis biraz yavaş olabiliyor ama her şey o kadar güzel ki, beklemek bile keyifli hale geliyor.",
    rating: 4,
    date: "Temmuz 2023"
  },
];

const Misafirlerimizden = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Misafirlerimizden</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Çakıltaşı deneyimini yaşayanların yorumları
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-16">
            2010 yılından beri misafirlerimize unutulmaz deneyimler yaşatmanın gururunu taşıyoruz. İşte onların Çakıltaşı hakkındaki düşünceleri.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-restaurant-cream/30 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-restaurant-gold text-restaurant-gold" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gray-300" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-restaurant-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-restaurant-burgundy/10 p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-4 text-center text-restaurant-charcoal">Siz de Deneyiminizi Paylaşın</h3>
            <p className="text-gray-700 text-center mb-6">
              Çakıltaşı'ndaki deneyiminizi Google üzerinden değerlendirebilir veya sosyal medya hesaplarımızda bizimle paylaşabilirsiniz. Yorumlarınız bizim için çok değerli!
            </p>
            <div className="flex justify-center">
              <a 
                href="https://g.page/r/CakiltasiRestaurant/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white px-6 py-3 rounded-lg"
              >
                Google'da Değerlendir
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Misafirlerimizden;
