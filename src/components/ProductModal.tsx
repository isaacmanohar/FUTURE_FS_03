import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { Product, useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="flex items-center gap-2">
              <Badge variant={product.stock > 10 ? "default" : product.stock > 0 ? "secondary" : "destructive"}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </Badge>
              <Badge variant="outline">{product.category}</Badge>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">(4.8 out of 5)</span>
            </div>
            
            <div className="space-y-4">
              <div className="text-3xl font-bold text-primary">
                ${product.price.toLocaleString()}
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Premium build quality</li>
                  <li>• Advanced AI capabilities</li>
                  <li>• Professional-grade performance</li>
                  <li>• 1-year warranty included</li>
                </ul>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full"
                size="lg"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;