import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Daily commuter",
    content: "HapticPath has completely transformed how I navigate the city. The vibration patterns are so intuitive - I learned them in just a few days and now I feel confident walking anywhere.",
    initials: "SC"
  },
  {
    name: "Marcus Rodriguez", 
    role: "Orientation & Mobility Instructor",
    content: "I recommend HapticPath to all my students. It's an excellent complement to traditional mobility training, providing the independence and confidence my students are looking for.",
    initials: "MR"
  },
  {
    name: "Elena Petrov",
    role: "University student", 
    content: "Being able to navigate campus independently has been life-changing. The app works perfectly indoors and outdoors, and I love that it respects my privacy.",
    initials: "EP"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium">
            Trusted by our community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who use HapticPath every day
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}