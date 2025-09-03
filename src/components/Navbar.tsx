import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Apple AI
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">Mac</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">iPad</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">iPhone</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">Watch</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">AI</a>
            </div>
          </div>
          <Button variant="hero" size="sm">
            Experience AI
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;