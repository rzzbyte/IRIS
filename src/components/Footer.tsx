import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-16 px-4 bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
              <span className="text-xl font-medium">HapticPath</span>
            </div>
            <p className="text-muted-foreground">
              Empowering independent navigation through haptic technology.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4>Product</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><a href="#" className="hover:text-foreground transition-colors">Features</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Download</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">User Guide</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Support</a></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4>Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><a href="#" className="hover:text-foreground transition-colors">About</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Accessibility</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Privacy</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Contact</a></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4>Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get notified about new features and updates.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
                type="email"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 HapticPath. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm">
              <Mail className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}