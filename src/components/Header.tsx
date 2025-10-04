import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full py-6 px-4 border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
          </div>
          <span className="text-xl font-medium">HapticPath</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline">Download</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}