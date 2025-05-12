
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/15551234567", "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">İletişim</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-restaurant-charcoal">
                Bize Ulaşın
              </h3>
              <p className="text-gray-600 mb-6">
                Rezervasyon, özel etkinlikler veya sorularınız için bizimle iletişime geçin.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-restaurant-burgundy mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">
                    Gündoğan Mahallesi, Sahil Yolu<br />
                    Gündoğan, Bodrum / Muğla
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="text-restaurant-burgundy mr-3 flex-shrink-0" />
                  <p className="text-gray-600">+90 (555) 123 45 67</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-restaurant-burgundy mr-3 flex-shrink-0" />
                  <p className="text-gray-600">info@cakiltasi.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="text-restaurant-burgundy mt-1 mr-3 flex-shrink-0" />
                  <div className="text-gray-600">
                    <p>Pazartesi - Cuma: 09:00 - 23:00</p>
                    <p>Cumartesi: 09:00 - 00:00</p>
                    <p>Pazar: 09:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="flex items-center bg-green-600 hover:bg-green-700 text-white w-full justify-center py-6"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5 mr-2"
              >
                <path fillRule="evenodd" d="M3.516 3.516c4.686-4.686 12.284-4.686 16.97 0 4.686 4.686 4.686 12.283 0 16.97a12.004 12.004 0 01-13.754 2.299l-5.814.735a.392.392 0 01-.438-.44l.748-5.788A12.002 12.002 0 013.517 3.517zm3.61 17.043l.3.158a9.846 9.846 0 0011.534-1.758c3.843-3.843 3.843-10.074 0-13.918-3.843-3.843-10.075-3.843-13.918 0a9.846 9.846 0 00-1.747 11.554l.16.303-.51 3.942a.196.196 0 00.219.22l3.961-.501zm6.534-7.003l-.933 1.164a9.843 9.843 0 01-3.497-3.495l1.166-.933a.792.792 0 00.23-.94L9.561 6.96a.793.793 0 00-.924-.445 1291.6 1291.6 0 00-2.023.524.797.797 0 00-.588.88 11.754 11.754 0 0010.005 10.005.797.797 0 00.88-.587l.525-2.023a.793.793 0 00-.445-.923L14.6 13.327a.792.792 0 00-.94.23z" clipRule="evenodd" />
              </svg>
              WhatsApp ile İletişime Geçin
            </Button>
          </div>

          <div className="h-full">
            <iframe
              title="Restaurant Location"
              className="w-full h-96 rounded-lg shadow-md border border-gray-200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12449.184066361514!2d27.318661710644537!3d37.10784850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be6f2efd0dd39b%3A0xfb37cdb5a1bcd430!2zR8O8bmRvxJ9hbiwgTXXEn2xh!5e0!3m2!1str!2str!4v1651000029000!5m2!1str!2str"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
