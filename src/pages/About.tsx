
import Layout from "@/components/layout/Layout";

const About = () => {
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
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Our journey, philosophy, and the faces behind the flavors
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Savory Bites Oasis began in 2010 with a simple vision: to create a dining experience that celebrates the art of gastronomy while honoring traditional cooking methods and ingredients.
              </p>
              <p className="text-gray-600 mb-4">
                Founded by Chef Maria Rodriguez after years of training in Europe and Asia, our restaurant brings together diverse culinary traditions into a cohesive menu that surprises and delights.
              </p>
              <p className="text-gray-600">
                What started as a small bistro has grown into a beloved culinary destination, known for our commitment to quality, creativity, and exceptional dining experiences.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding bg-restaurant-cream">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold mb-4 text-restaurant-burgundy">Quality Ingredients</h3>
              <p className="text-gray-600">
                We source only the finest ingredients from local farms and trusted suppliers. Our commitment to freshness and quality is unwavering, forming the foundation of every dish we create.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold mb-4 text-restaurant-burgundy">Artisanal Approach</h3>
              <p className="text-gray-600">
                Each dish is crafted with meticulous attention to detail. We honor traditional techniques while embracing innovation, creating unique culinary experiences that respect the essence of ingredients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold mb-4 text-restaurant-burgundy">Sustainable Practices</h3>
              <p className="text-gray-600">
                We are committed to environmentally conscious practices, from reducing waste to supporting sustainable agriculture. Our goal is to create exceptional food while respecting our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chef */}
            <div className="text-center">
              <div className="h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Chef Maria Rodriguez" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-restaurant-charcoal">Maria Rodriguez</h3>
              <p className="text-restaurant-burgundy font-medium mb-3">Executive Chef</p>
              <p className="text-gray-600 text-sm">
                With 15 years of experience in prestigious kitchens around the world, Chef Maria brings passion and innovation to every dish she creates.
              </p>
            </div>
            
            {/* Sous Chef */}
            <div className="text-center">
              <div className="h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Chef James Wilson" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-restaurant-charcoal">James Wilson</h3>
              <p className="text-restaurant-burgundy font-medium mb-3">Sous Chef</p>
              <p className="text-gray-600 text-sm">
                James specializes in French cuisine and has a remarkable ability to blend traditional techniques with modern presentations.
              </p>
            </div>
            
            {/* Pastry Chef */}
            <div className="text-center">
              <div className="h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607631568211-33798ab7f29c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Chef Sophia Lee" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-restaurant-charcoal">Sophia Lee</h3>
              <p className="text-restaurant-burgundy font-medium mb-3">Pastry Chef</p>
              <p className="text-gray-600 text-sm">
                Sophia creates breathtaking desserts that are as beautiful as they are delicious, drawing inspiration from her travels throughout Asia and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
