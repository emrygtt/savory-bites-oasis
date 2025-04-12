
import { UtensilsCrossed, Clock, Award } from "lucide-react";

const features = [
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-restaurant-gold" />,
    title: "Exquisite Cuisine",
    description: "Our master chefs create culinary delights that blend traditional techniques with modern innovation."
  },
  {
    icon: <Clock className="h-10 w-10 text-restaurant-gold" />,
    title: "Timely Service",
    description: "Experience prompt and attentive service that enhances your dining experience without rushing you."
  },
  {
    icon: <Award className="h-10 w-10 text-restaurant-gold" />,
    title: "Award Winning",
    description: "Recognized for excellence in culinary arts and customer satisfaction by food critics and customers alike."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-3 text-restaurant-charcoal">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
