
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The flavors in every dish were extraordinary! This restaurant has redefined fine dining for me.",
    author: "Emily Johnson",
    role: "Food Blogger",
    rating: 5
  },
  {
    quote: "Exceptional service and ambiance. The chef's tasting menu is an experience not to be missed!",
    author: "Michael Chen",
    role: "Restaurant Critic",
    rating: 5
  },
  {
    quote: "Every visit feels special. They've mastered the art of combining flavors in unexpected, delightful ways.",
    author: "Sophia Rodriguez",
    role: "Regular Customer",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-restaurant-burgundy text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-restaurant-cream">
          What Our Guests Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-restaurant-charcoal border-none h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-restaurant-gold text-restaurant-gold" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} size={18} className="text-gray-400" />
                  ))}
                </div>
                <p className="italic mb-6 text-restaurant-cream">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-restaurant-gold">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
