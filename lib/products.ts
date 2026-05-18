export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  images: string[]
  category: string
  stock: number
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wool Blanket',
    description: 'Luxurious 100% merino wool blanket, perfect for cozy evenings',
    price: 129.99,
    image: '/products/blanket.jpg',
    images: ['/products/blanket.jpg', '/products/blanket-detail-1.jpg', '/products/blanket-detail-2.jpg'],
    category: 'Textiles',
    stock: 15
  },
  {
    id: '2',
    name: 'Ceramic Coffee Set',
    description: 'Handcrafted ceramic coffee cups and saucers, set of 4',
    price: 89.99,
    image: '/products/coffee-set.jpg',
    images: ['/products/coffee-set.jpg', '/products/coffee-set-detail-1.jpg', '/products/coffee-set-detail-2.jpg'],
    category: 'Kitchen',
    stock: 8
  },
  {
    id: '3',
    name: 'Minimalist Desk Lamp',
    description: 'Sleek LED desk lamp with adjustable brightness',
    price: 59.99,
    image: '/products/lamp.jpg',
    images: ['/products/lamp.jpg', '/products/lamp-detail-1.jpg', '/products/lamp-detail-2.jpg'],
    category: 'Lighting',
    stock: 12
  },
  {
    id: '4',
    name: 'Organic Cotton Pillows',
    description: 'Set of 2 organic cotton pillows with natural filling',
    price: 99.99,
    image: '/products/pillows.jpg',
    images: ['/products/pillows.jpg', '/products/pillows-detail-1.jpg', '/products/pillows-detail-2.jpg'],
    category: 'Bedroom',
    stock: 20
  },
  {
    id: '5',
    name: 'Bamboo Cutting Board',
    description: 'Large sustainable bamboo cutting board with handles',
    price: 44.99,
    image: '/products/cutting-board.jpg',
    images: ['/products/cutting-board.jpg', '/products/cutting-board-detail-1.jpg', '/products/cutting-board-detail-2.jpg'],
    category: 'Kitchen',
    stock: 25
  },
  {
    id: '6',
    name: 'Linen Table Runner',
    description: 'Natural linen table runner, machine washable',
    price: 34.99,
    image: '/products/table-runner.jpg',
    images: ['/products/table-runner.jpg', '/products/table-runner-detail-1.jpg', '/products/table-runner-detail-2.jpg'],
    category: 'Home Decor',
    stock: 18
  },
  {
    id: '7',
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated water bottle keeps drinks cold for 24 hours',
    price: 49.99,
    image: '/products/water-bottle.jpg',
    images: ['/products/water-bottle.jpg', '/products/water-bottle-detail-1.jpg', '/products/water-bottle-detail-2.jpg'],
    category: 'Travel',
    stock: 30
  },
  {
    id: '8',
    name: 'Natural Soap Collection',
    description: 'Set of 6 handmade natural soaps with essential oils',
    price: 39.99,
    image: '/products/soaps.jpg',
    images: ['/products/soaps.jpg', '/products/soaps-detail-1.jpg', '/products/soaps-detail-2.jpg'],
    category: 'Personal Care',
    stock: 22
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(products.map(p => p.category)))
}
