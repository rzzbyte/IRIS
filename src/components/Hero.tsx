import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight">
              Navigate the world through{" "}
              <span className="text-primary">haptic guidance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Experience intuitive navigation designed specifically for the blind and visually impaired community. 
              Feel your way forward with precision haptic feedback.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6">
              Download HapticPath
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Works offline</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Privacy first</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free forever</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-3xl"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1632169486874-163fc761f0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGluZCUyMHBlcnNvbiUyMHdhbGtpbmclMjBjYW5lfGVufDF8fHx8MTc1OTU2ODMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Person with white cane navigating independently"
            className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}