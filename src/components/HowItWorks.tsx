import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Set Your Destination",
    description: "Use voice commands or the accessible interface to input where you want to go. The app understands natural language and common landmarks."
  },
  {
    number: "02", 
    title: "Feel the Direction",
    description: "Your phone vibrates with unique patterns - gentle pulses guide you forward, different rhythms indicate turns, and specific patterns signal obstacles or points of interest."
  },
  {
    number: "03",
    title: "Navigate with Confidence", 
    description: "Follow the haptic cues as they guide you step by step. The vibrations become stronger as you approach your destination and change intensity based on your walking pace."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium">
            How HapticPath works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, intuitive navigation that speaks to you through touch
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1675669313780-2db180653332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwaGFwdGljJTIwdmlicmF0aW9ufGVufDF8fHx8MTc1OTU2ODMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Smartphone with haptic feedback visualization"
              className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}