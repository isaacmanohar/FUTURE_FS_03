const Features = () => {
  const features = [
    {
      icon: "🧠",
      title: "Neural Processing",
      description: "Advanced AI chips that learn and adapt to your usage patterns in real-time.",
    },
    {
      icon: "🔮",
      title: "Predictive Intelligence",
      description: "Anticipate your needs before you know them with revolutionary predictive algorithms.",
    },
    {
      icon: "🌐",
      title: "Quantum Connectivity",
      description: "Seamless device ecosystem powered by quantum-entangled communication protocols.",
    },
    {
      icon: "🛡️",
      title: "Privacy Shield AI",
      description: "Next-generation privacy protection using AI that secures your data at the quantum level.",
    },
    {
      icon: "⚡",
      title: "Instant Response",
      description: "Zero-latency interactions powered by edge AI processing and neural acceleration.",
    },
    {
      icon: "🎨",
      title: "Creative Intelligence",
      description: "AI-assisted creativity tools that enhance your artistic vision and productivity.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Powered by</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advanced AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed with artificial intelligence at its core, 
            creating experiences that feel magical and intuitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl glass border border-border/30 transition-smooth hover:shadow-card hover:border-primary/30"
            >
              <div className="text-5xl mb-6 group-hover:animate-bounce">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;