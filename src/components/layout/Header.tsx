
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const restorNavLinks = [
    { name: "Menü", path: "/menu" },
    { name: "Galeri", path: "/galeri" },
    { name: "Favori Lezzetler", path: "/favori-lezzetlerimiz" },
  ];

  const beachNavLinks = [
    { name: "Çakıltaşı Beach", path: "/beach" },
    { name: "Plaj Galerisi", path: "/plaj-galerisi" },
  ];

  const villaNavLinks = [
    { name: "Villa Özellikleri", path: "/villa-ozellikleri" },
    { name: "Fiyatlar", path: "/fiyatlar" },
    { name: "Rezervasyon Formu", path: "/rezervasyon-formu" },
  ];

  const navLinks = [
    { name: "Anasayfa", path: "/" },
    { name: "Biz Kimiz", path: "/hakkimizda" },
    { name: "Misafirlerimizden", path: "/misafirlerimizden" },
    { name: "Blog", path: "/blog" },
    { name: "Rezervasyon & İletişim", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-restaurant-charcoal/95 text-restaurant-cream py-2"
          : "bg-transparent text-restaurant-cream py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-xl md:text-2xl font-bold">
              Çakıltaşı <span className="text-restaurant-gold">Beach</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="font-medium hover:text-restaurant-gold transition-colors">
                    Anasayfa
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/hakkimizda" className="font-medium hover:text-restaurant-gold transition-colors">
                    Biz Kimiz
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-restaurant-gold">Restoran</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {restorNavLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-restaurant-gold">Beach Hizmeti</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {beachNavLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-restaurant-gold">Villa Kiralama</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {villaNavLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{link.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/misafirlerimizden" className="font-medium hover:text-restaurant-gold transition-colors">
                    Misafirlerimizden
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blog" className="font-medium hover:text-restaurant-gold transition-colors">
                    Blog
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="font-medium hover:text-restaurant-gold transition-colors">
                    Rezervasyon & İletişim
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-restaurant-cream hover:text-restaurant-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-medium hover:text-restaurant-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-700 pt-2">
                <p className="text-sm font-semibold mb-2">Restoran</p>
                {restorNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block pl-3 py-1 text-sm hover:text-restaurant-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-gray-700 pt-2">
                <p className="text-sm font-semibold mb-2">Beach Hizmeti</p>
                {beachNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block pl-3 py-1 text-sm hover:text-restaurant-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-gray-700 pt-2">
                <p className="text-sm font-semibold mb-2">Villa Kiralama</p>
                {villaNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block pl-3 py-1 text-sm hover:text-restaurant-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
