const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Products</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">iPhone AI</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">MacBook AI</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">iPad AI Pro</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Apple Watch AI</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Apple AI+</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Neural Cloud</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">AI Training</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Support</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">About AI Ethics</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Careers</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Newsroom</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Research</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Neural Network</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Developer Portal</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">AI Community</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Apple AI
              </div>
              <span className="text-muted-foreground">© 2024 Reimagined by AI</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">AI Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;