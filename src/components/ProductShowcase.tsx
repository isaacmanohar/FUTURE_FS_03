import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const products = [
    {
      name: "iPhone AI Pro",
      description: "Revolutionary AI processing power in your pocket",
      price: "From $1,299",
      features: ["Neural Engine Pro", "AI Camera System", "Holographic Display"],
    },
    {
      name: "MacBook AI",
      description: "Limitless creativity powered by quantum AI",
      price: "From $2,499",
      features: ["M4 AI Chip", "Neural Graphics", "Adaptive Intelligence"],
    },
    {
      name: "Apple Vision AI",
      description: "Step into tomorrow with spatial computing",
      price: "From $3,999",
      features: ["Mixed Reality AI", "Eye Tracking Pro", "Neural Interface"],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-foreground">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our revolutionary lineup of AI-enhanced devices that push the 
            boundaries of what's possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className="glass border-border/30 p-8 transition-smooth hover:shadow-card hover:scale-105 group"
            >
              <div className="space-y-6">
                <div className="h-48 bg-gradient-glow rounded-lg flex items-center justify-center">
                  <div className="text-6xl opacity-60 group-hover:opacity-100 transition-smooth">
                    {index === 0 && "📱"}
                    {index === 1 && "💻"}
                    {index === 2 && "🥽"}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-lg font-semibold text-primary mb-4">{product.price}</p>
                    <Button variant="glass" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;