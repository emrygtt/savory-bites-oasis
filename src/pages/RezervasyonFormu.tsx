
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const RezervasyonFormu = () => {
  const [date, setDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adults: "",
    children: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !date || !endDate) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm gerekli alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    // Demo submission
    toast({
      title: "Rezervasyon Talebi Alındı",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      adults: "",
      children: "",
      message: ""
    });
    setDate(undefined);
    setEndDate(undefined);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Rezervasyon Formu</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Villa rezervasyonu için bilgilerinizi doldurun
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-restaurant-cream p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-2xl font-bold mb-6 text-restaurant-charcoal text-center">Rezervasyon Bilgileri</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Giriş Tarihi */}
                  <div>
                    <Label htmlFor="checkin" className="font-medium">Giriş Tarihi*</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="checkin"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP", { locale: tr }) : <span>Tarih Seçin</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          locale={tr}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  {/* Çıkış Tarihi */}
                  <div>
                    <Label htmlFor="checkout" className="font-medium">Çıkış Tarihi*</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="checkout"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP", { locale: tr }) : <span>Tarih Seçin</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          disabled={(date) => {
                            // Disable dates before check-in date
                            return date < (date ?? new Date());
                          }}
                          initialFocus
                          locale={tr}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Yetişkin Sayısı */}
                  <div>
                    <Label htmlFor="adults" className="font-medium">Yetişkin Sayısı*</Label>
                    <Input 
                      id="adults"
                      name="adults"
                      type="number"
                      min="1"
                      max="6"
                      value={formData.adults}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Yetişkin sayısı"
                    />
                  </div>
                  
                  {/* Çocuk Sayısı */}
                  <div>
                    <Label htmlFor="children" className="font-medium">Çocuk Sayısı</Label>
                    <Input 
                      id="children"
                      name="children"
                      type="number"
                      min="0"
                      max="4"
                      value={formData.children}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Çocuk sayısı"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ad Soyad */}
                  <div>
                    <Label htmlFor="name" className="font-medium">Ad Soyad*</Label>
                    <Input 
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  
                  {/* E-posta */}
                  <div>
                    <Label htmlFor="email" className="font-medium">E-posta*</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                </div>
                
                {/* Telefon */}
                <div>
                  <Label htmlFor="phone" className="font-medium">Telefon*</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Telefon numaranız"
                  />
                </div>
                
                {/* Ek Bilgi */}
                <div>
                  <Label htmlFor="message" className="font-medium">Ek Bilgiler</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Özel istekleriniz veya sormak istediğiniz sorular"
                    rows={4}
                  />
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-4">* ile işaretli alanlar zorunludur.</p>
                  <Button type="submit" className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white py-6">
                    Rezervasyon Talebini Gönder
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-8 p-6 bg-restaurant-charcoal/10 rounded-lg">
              <h3 className="font-serif text-xl font-bold mb-4 text-restaurant-charcoal">Rezervasyon Bilgileri</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rezervasyonunuz, talebiniz onaylandıktan sonra %30 ön ödeme ile kesinleşir.</li>
                <li>• Kalan ödeme, villa girişinizde nakit olarak alınır.</li>
                <li>• 5.000₺ depozito villa girişinde alınır, çıkışta hasar kontrolü sonrası iade edilir.</li>
                <li>• İptal koşulları: Giriş tarihinden 30 gün öncesine kadar ücretsiz iptal.</li>
                <li>• Villa kapasitesi maksimum 6 kişidir.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RezervasyonFormu;
