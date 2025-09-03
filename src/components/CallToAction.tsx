import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="glass rounded-3xl p-12 lg:p-16 text-center border border-border/30 shadow-card">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Ready to step into</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                the future?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join millions who are already experiencing the next generation of 
              AI-powered technology. The future is here, and it's intelligent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-12 py-6" onClick={() => window.location.href = '/shop'}>
                Shop AI Products
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-12 py-6">
                Schedule Demo
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                Free shipping and returns. Carbon neutral delivery available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;