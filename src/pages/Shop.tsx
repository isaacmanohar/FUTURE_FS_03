import { useState } from 'react';
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import ShoppingCart from "@/components/ShoppingCart";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Shop = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen">
        <div className="fixed top-4 right-4 z-50">
          <ShoppingCart onCheckout={handleCheckout} />
        </div>
        
        <Navbar />
        
        <main className="container mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-foreground">Store</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our revolutionary lineup of AI-enhanced devices that push the 
              boundaries of what's possible.
            </p>
          </div>
          
          <ProductGrid />
        </main>
        
        <Footer />
        
        <CheckoutForm 
          isOpen={isCheckoutOpen} 
          onClose={() => setIsCheckoutOpen(false)} 
        />
      </div>
    </CartProvider>
  );
};

export default Shop;