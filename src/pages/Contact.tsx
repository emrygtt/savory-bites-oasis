
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submission:", formData);
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/15551234567", "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="h-[60vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1577301411242-292a617686f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-restaurant-charcoal/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            We'd love to hear from you. Reach out for reservations or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-restaurant-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-subheading">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you want to make a reservation, plan a special event, or simply have a question, our team is ready to assist you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-restaurant-burgundy mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Gourmet Lane, Culinary District<br />
                      Foodville, FC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-restaurant-burgundy mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-restaurant-burgundy mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@savorybitesoasis.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-restaurant-burgundy mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                      <p>Saturday: 10:00 AM - 11:00 PM</p>
                      <p>Sunday: 10:00 AM - 9:00 PM</p>
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
                Chat with us on WhatsApp
              </Button>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-subheading">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white w-full py-6"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <iframe
              title="Restaurant Location"
              className="w-full h-[400px] rounded-lg shadow-md border border-gray-200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1586000029000!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
