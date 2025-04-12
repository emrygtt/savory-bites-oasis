
import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-restaurant-charcoal text-restaurant-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              Savory Bites <span className="text-restaurant-gold">Oasis</span>
            </h3>
            <p className="mb-4 text-sm text-gray-300">
              An exquisite dining experience with a blend of traditional and modern cuisine.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-restaurant-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-restaurant-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p>123 Gourmet Lane, Culinary District, Foodville, FC 12345</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <p>info@savorybitesoasis.com</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Hours</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday: 10:00 AM - 11:00 PM</p>
              <p>Sunday: 10:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Savory Bites Oasis. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-restaurant-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-restaurant-gold">
              Terms of Service
            </Link>
            <Link to="/admin" className="text-sm text-gray-400 hover:text-restaurant-gold">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
