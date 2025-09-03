import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone AI Pro',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
    description: 'Revolutionary AI processing power in your pocket with advanced neural capabilities.',
    category: 'Smartphones',
    stock: 25
  },
  {
    id: '2',
    name: 'MacBook AI',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
    description: 'Limitless creativity powered by quantum AI and M4 chip technology.',
    category: 'Laptops',
    stock: 15
  },
  {
    id: '3',
    name: 'Apple Vision AI',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&h=500&fit=crop',
    description: 'Step into tomorrow with spatial computing and mixed reality AI.',
    category: 'VR/AR',
    stock: 10
  },
  {
    id: '4',
    name: 'iPad Pro AI',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
    description: 'Professional tablet with AI-enhanced productivity and creative tools.',
    category: 'Tablets',
    stock: 30
  },
  {
    id: '5',
    name: 'AirPods Pro AI',
    price: 299,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop',
    description: 'Intelligent audio with adaptive noise cancellation and spatial sound.',
    category: 'Audio',
    stock: 50
  },
  {
    id: '6',
    name: 'Apple Watch AI',
    price: 899,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop',
    description: 'Advanced health monitoring with AI-powered insights and predictions.',
    category: 'Wearables',
    stock: 40
  }
];

export const categories = ['All', 'Smartphones', 'Laptops', 'VR/AR', 'Tablets', 'Audio', 'Wearables'];