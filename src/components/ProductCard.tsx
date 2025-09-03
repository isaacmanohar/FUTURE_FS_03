import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { Product, useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  return (
    <Card className="glass border-border/30 hover:shadow-card hover:scale-105 transition-smooth group overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
        />
        <Badge 
          variant={product.stock > 10 ? "default" : product.stock > 0 ? "secondary" : "destructive"}
          className="absolute top-2 right-2"
        >
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg text-foreground">{product.name}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toLocaleString()}
          </span>
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onViewDetails(product)}
          className="flex-1"
        >
          <Eye className="w-4 h-4 mr-2" />
          View
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="flex-1"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;