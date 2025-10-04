import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Smartphone, Navigation, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Navigation,
    title: "Precise Direction Guidance",
    description: "Get exact directional feedback through customizable haptic patterns that guide you to your destination with confidence."
  },
  {
    icon: Smartphone,
    title: "Intuitive Vibration Patterns",
    description: "Learn simple vibration codes that communicate complex navigation information directly through your smartphone."
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your location data stays on your device. No tracking, no data collection, no compromises on your privacy."
  },
  {
    icon: Zap,
    title: "Works Anywhere",
    description: "Indoor and outdoor navigation powered by multiple positioning technologies for seamless guidance everywhere."
  }
];

export function Features() {
  return (
    <section id="features" className="w-full py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium">
            Built for independence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed with accessibility and user autonomy at its core, 
            empowering confident navigation in any environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}