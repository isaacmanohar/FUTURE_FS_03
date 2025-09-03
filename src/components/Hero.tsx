import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Intelligence
              </span>
              <br />
              <span className="text-foreground">Reimagined</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Experience the future of technology with AI-powered devices that understand, 
              learn, and evolve with you. The new era of Apple begins now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explore AI Products
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                Watch the Future
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="AI-powered Apple device in futuristic holographic space" 
                className="w-full h-auto rounded-2xl shadow-card animate-glow"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-glow rounded-2xl blur-2xl opacity-50 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;