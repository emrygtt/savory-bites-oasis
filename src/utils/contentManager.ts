// Content management utility for storing and retrieving page content
import { fetchPageContent, fetchAllContent, updatePageContent } from '@/services/apiService';

// Define content types
export type ContentSection = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
};

export type PageContent = {
  metaTitle: string;
  metaDescription: string;
  sections: ContentSection[];
};

export type SiteContent = {
  [key: string]: PageContent;
};

// Default content
const defaultContent: SiteContent = {
  hakkimizda: {
    metaTitle: "Çakıltaşı Beach Kafe & Restoran | Gündoğan Bodrum'un Doğal Lezzet Durağı",
    metaDescription: "Gündoğan Bodrum'da deniz kenarında samimi bir ortamda, el yapımı Ege yemekleri, zeytinyağlılar ve organik köy kahvaltısıyla unutulmaz bir lezzet deneyimi sunan aile işletmesi Çakıltaşı ile tanışın.",
    sections: [
      {
        id: "intro",
        title: "Ege'nin Kalbinde Doğal Lezzetlerin Adresi: Çakıltaşı Beach Kafe Restoran",
        content: "Çakıltaşı, 2010 yılında Halil Bey'in \"deniz kenarında küçük, samimi bir mekan açma\" hayalinin gerçeğe dönüşmesiyle Gündoğan'da kuruldu. Uzun yıllar mağazacılık sektöründe yöneticilik yapmış olan Halil Bey, aynı zamanda otelcilik geçmişine de sahipti. Dedesinden miras kalan taş zeytinyağı fabrikası, bu hayalin temel taşlarından biri oldu. Eşi Selvan Hanım ile birlikte çıktıkları bu lezzet yolculuğunda, mutfaklarında her zaman samimiyeti, kaliteyi ve doğallığı ön planda tuttular."
      },
      {
        id: "history",
        title: "Tarihçemiz",
        content: "İlk yıllarda ailecek hazırladıkları ev yemekleriyle yola çıkan Çakıltaşı, kısa sürede Gündoğan halkının ve tatilcilerin favori mekanlarından biri haline geldi. İkinci yıldan itibaren bölgedeki kadınlara istihdam sağlayarak hem yerel ekonomiye katkıda bulundu hem de mutfağını daha da zenginleştirdi. Bugün ise menüsünde, yöresel tariflerden ilham alan onlarca çeşit meze, zeytinyağlı ve geleneksel yemek yer alıyor."
      },
      {
        id: "offerings",
        title: "Neler Sunuyoruz",
        content: "• El açması mantı, çiğ börek ve zeytinyağlı Ege yemekleri\n• Geleneksel lezzetler: Keşkek, lokum pilavı, kabak çiçeği dolması\n• Izgara, güveç ve zengin salata çeşitleri\n• Organik köy kahvaltısı (mevsimlik ve doğal ürünlerle)\n• Deniz mahsulleri (balık hariç)\n• Taş fırında pişmiş ev yapımı baklava\n• Butik pastalar, ev tatlıları, sağlıklı atıştırmalıklar"
      },
      {
        id: "mission",
        title: "Misyonumuz",
        content: "Çakıltaşı ailesi olarak, her misafirimize anne eli değmiş gibi sıcak, sağlıklı ve unutulmaz bir sofra deneyimi sunmak en büyük önceliğimiz. Marka tescil belgeli işletmemizde, kalite, doğallık ve samimiyet ilkelerinden ödün vermeden misafir memnuniyetini en üst düzeyde tutmayı hedefliyoruz."
      }
    ]
  },
  beach: {
    metaTitle: "Çakıltaşı Beach | Gündoğan Bodrum'da Denize Sıfır, Giriş Ücretsiz Beach",
    metaDescription: "Gündoğan Bodrum'da denize sıfır, giriş ücreti olmayan sakin bir beach deneyimi. Temmuz–Ağustos'ta yeme içme limiti uygulanır. Rezervasyon gereklidir. Servis ücreti yoktur.",
    sections: [
      {
        id: "intro",
        title: "Çakıltaşı Beach – Gündoğan Sahilinde Huzurla Buluşun",
        content: "Bodrum'un kalbinde ama kalabalığından uzakta, Gündoğan sahilinin en doğal noktasında yer alan Çakıltaşı Beach, gün boyu denizin ve Ege mutfağının keyfini çıkarabileceğiniz sakin ve kaliteli bir sahil deneyimi sunar."
      },
      {
        id: "details",
        title: "Beach Detayları",
        content: "Denize sıfır konumdaki şezlonglarımız, sabahın ilk ışıklarıyla birlikte sizi hafif bir esinti eşliğinde selamlar. Giriş ücreti almıyoruz; sadece Temmuz ve Ağustos aylarında yeme-içme üzerine minimum harcama uygulamamız bulunuyor. Bunun dışında, ekstra servis ücreti de alınmamaktadır."
      },
      {
        id: "offerings",
        title: "Çakıltaşı Beach'te Sizi Neler Bekliyor?",
        content: "- Gündoğan sahilinde denize sıfır huzurlu bir konum\n- Giriş ücreti yok\n- Temmuz ve Ağustos'ta minimum harcama uygulaması\n- Ekstra servis ücreti alınmaz\n- Restoran menüsü geçerlidir (ayrı beach menüsü yoktur)\n- Şezlong & şemsiye hizmeti – sınırlı kapasite, sakinlik garantili\n- Hafif müzik eşliğinde gürültüsüz bir atmosfer\n- Gün batımında Ege ezgileriyle keyifli akşamlar\n- Evcil hayvan kabul edilmemektedir\n- Plaj için rezervasyon zorunludur"
      }
    ]
  },
  villa: {
    metaTitle: "Gündoğan'da Özel Havuzlu Kiralık Villa | Çakıltaşı Villa Kiralama Bodrum",
    metaDescription: "Gündoğan Bodrum'da bahçeli, özel havuzlu, temiz ve konforlu 5 kiralık villa. Sessizlik, deniz keyfi ve Çakıltaşı Beach ayrıcalığıyla unutulmaz bir tatil sizi bekliyor.",
    sections: [
      {
        id: "intro",
        title: "Gündoğan'da Özel Havuzlu Villa Kiralama – Çakıltaşı Ayrıcalığıyla",
        content: "Bodrum'un doğal güzellikleriyle öne çıkan gözde tatil beldesi Gündoğan'da, kalabalıktan uzak ama her şeye yakın bir tatil deneyimi arıyorsanız, Çakıltaşı'nın villa kiralama hizmeti tam size göre. Gündoğan sahiline yürüme mesafesinde yer alan, doğayla iç içe konumda bulunan 5 adet özel havuzlu ve bahçeli kiralık villamız, sizlere hem konforlu hem de unutulmaz bir konaklama sunuyor."
      },
      {
        id: "features",
        title: "Villa Özellikleri",
        content: "Her bir villa, modern mimarisi ve kullanışlı iç tasarımı ile hem kısa süreli tatiller hem de uzun süreli konaklamalar için uygundur. Tam donanımlı mutfaklar, geniş salonlar, konforlu yatak odaları ve her villaya ait özel yüzme havuzu ile tatilinizi ev rahatlığında geçirmenizi sağlıyoruz."
      },
      {
        id: "highlights",
        title: "Villalarımızın öne çıkan özellikleri",
        content: "• Gündoğan'da merkezi ama sakin konum\n• Özel yüzme havuzu ve yemyeşil bahçe\n• Geniş ve ferah yaşam alanları\n• Temizlik ve hijyen garantisi\n• Ücretsiz otopark imkanı\n• Sadece ailelere ve çiftlere özel kiralama seçeneği\n• Evcil hayvan kabul edilmemektedir."
      }
    ]
  },
  fiyatlar: {
    metaTitle: "Villa Fiyatları | Çakıltaşı Villa Kiralama Bodrum",
    metaDescription: "Gündoğan Bodrum'da bahçeli, özel havuzlu, temiz ve konforlu kiralık villaların fiyat bilgileri. Sezonda ve sezon dışında uygun fiyatlar.",
    sections: [
      {
        id: "intro",
        title: "Villa Kiralama Fiyatları",
        content: "Gündoğan'daki özel havuzlu villalarımız farklı bütçelere uygun seçenekler sunmaktadır. Fiyatlarımız sezona göre değişiklik göstermektedir."
      },
      {
        id: "low-season",
        title: "Sezon Dışı Fiyatlar (Ekim-Mayıs)",
        content: "• Haftalık: 10.000 TL'den başlayan fiyatlarla\n• Aylık: 35.000 TL'den başlayan fiyatlarla\n\nSezon dışı dönemde minimum 3 gece konaklama zorunluluğu vardır."
      },
      {
        id: "high-season",
        title: "Sezon İçi Fiyatlar (Haziran-Eylül)",
        content: "• Haziran: 15.000 TL / hafta\n• Temmuz: 20.000 TL / hafta\n• Ağustos: 25.000 TL / hafta\n• Eylül: 18.000 TL / hafta\n\nYaz sezonunda minimum 1 hafta konaklama zorunluluğu vardır."
      },
      {
        id: "details",
        title: "Fiyata Dahil Olanlar",
        content: "• Temizlik ücreti\n• Havuz bakımı\n• Wi-Fi internet\n• Su, elektrik, gaz\n• Çakıltaşı Beach'te şezlong tahsisi\n\nEkstra hizmetler için lütfen bizimle iletişime geçiniz."
      }
    ]
  },
  favori_lezzetler: {
    metaTitle: "Çakıltaşı Favori Lezzetler | Gündoğan'da Mantı, Çiğ Börek, Kabak Çiçeği ve Ciğer Tava",
    metaDescription: "Gündoğan'da ev yapımı mantı, kabak çiçeği dolması, çiğ börek ve ciğer tava nerede yenir? Çakıltaşı'nın deniz kenarındaki en sevilen lezzetlerini keşfedin.",
    sections: [
      {
        id: "intro",
        title: "Favori Lezzetlerimiz",
        content: "Ege'nin en sevilen tatlarını, denizin kenarında, ev yapımı sıcaklığında sunuyoruz. İşte Çakıltaşı'na gelenlerin asla vazgeçemediği dört özel lezzet:"
      },
      {
        id: "manti",
        title: "Mantı – Ege usulüyle, bol sarımsaklı yoğurt ve tereyağ sosuyla",
        content: "Ev yapımı mantımız, incecik açılmış hamuru ve bol iç harcıyla, klasik tatları özleyenlerin favorisi. Üzerine dökülen kızgın tereyağı ve sarımsaklı yoğurduyla, deniz kenarında bambaşka bir deneyime dönüşüyor. Bodrum'da mantı nerede yenir? diyenlerin cevabı: Çakıltaşı.",
        imageUrl: "https://images.unsplash.com/photo-1625944525200-77c39d739d4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "ciborek",
        title: "Çi Börek – Tam kıvamında çıtır lezzet",
        content: "İç harcı bol, dışı altın rengi çıtır çıtır! Her sabah taze açılan hamurla hazırladığımız çiğ börek, özellikle kahvaltıdan akşama kadar günün her saatinde çok seviliyor. Yanında bir bardak çayla, yazlık ev keyfi garantili. Gündoğan'da çiğ börek yapan yerler arasında müdavimlerin vazgeçilmezi.",
        imageUrl: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "kabak",
        title: "Kabak Çiçeği Dolması – Sabahın ilk ışığında toplanan çiçeklerle",
        content: "Sadece erken saatte toplanan çiçeklerle, tazeliğini kaybetmeden hazırladığımız kabak çiçeği dolması, zeytinyağlı sevenlerin gözdesi. Hafifliğiyle, Ege mutfağının zarafetini tek lokmada hissettiriyor. \"Kabak çiçeği dolması nerede yenir?\" diye soranlara, bir tabak bizden.",
        imageUrl: "https://images.unsplash.com/photo-1625944525257-2d3c5a722258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
      },
      {
        id: "ciger",
        title: "Ciğer Tava – Bol soğanlı, çıtır dış kaplamasıyla",
        content: "İnce dilimlenmiş, ustalıkla kızartılmış ciğerler… Yanında sumaklı soğan ve taze yeşilliklerle servis edilen bu lezzet, geleneksel sofraları özleyenleri kendine çekiyor. Bodrum ciğer tava önerisi arayanlara yerel, ev yapımı bir seçenek.",
        imageUrl: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
      }
    ]
  }
};

// Initialize content from API or default values
export const initializeContent = async (): Promise<void> => {
  // First, check if we already have content in localStorage
  const storedContent = localStorage.getItem('siteContent');
  
  if (!storedContent) {
    // Initialize with default content until API is available
    localStorage.setItem('siteContent', JSON.stringify(defaultContent));
    
    // In future, this would fetch from API:
    // const apiContent = await fetchAllContent();
    // if (Object.keys(apiContent).length === 0) {
    //   localStorage.setItem('siteContent', JSON.stringify(defaultContent));
    // }
  }
};

// Get all content
export const getAllContent = async (): Promise<SiteContent> => {
  const content = await fetchAllContent();
  return content || defaultContent;
};

// Get page content
export const getPageContent = async (pageKey: string): Promise<PageContent | null> => {
  const content = await fetchPageContent(pageKey);
  return content || null;
};

// Update page content
export const updateContent = async (pageKey: string, content: PageContent): Promise<boolean> => {
  const result = await updatePageContent(pageKey, content);
  return result.success;
};

// These functions keep the original sync API for backward compatibility
// Will be deprecated once the async API is fully integrated
export const getAllContentSync = (): SiteContent => {
  const content = localStorage.getItem('siteContent');
  return content ? JSON.parse(content) : defaultContent;
};

export const getPageContentSync = (pageKey: string): PageContent | null => {
  const allContent = getAllContentSync();
  return allContent[pageKey] || null;
};

export const updatePageContentSync = (pageKey: string, content: PageContent): void => {
  const allContent = getAllContentSync();
  allContent[pageKey] = content;
  localStorage.setItem('siteContent', JSON.stringify(allContent));
};

// Add a new page
export const addPage = async (pageKey: string, content: PageContent): Promise<boolean> => {
  return await updateContent(pageKey, content);
};

// Delete a page
export const deletePage = async (pageKey: string): Promise<boolean> => {
  // This will be implemented with actual API call later
  // For now use the sync version
  const allContent = getAllContentSync();
  delete allContent[pageKey];
  localStorage.setItem('siteContent', JSON.stringify(allContent));
  return true;
};

// Reset to default content
export const resetContent = (): void => {
  localStorage.setItem('siteContent', JSON.stringify(defaultContent));
};
