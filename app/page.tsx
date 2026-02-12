import Navbar from "./components/NavBar";

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Minimalist Watch', price: 120, category: 'Accessories', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Leather Backpack', price: 85, category: 'Bags', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Wireless Headphones', price: 210, category: 'Electronics', image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Smart Speaker', price: 50, category: 'Electronics', image: 'https://via.placeholder.com/300' },
];


// types/product.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-bold text-gray-900">&#8377;{product.price}</p>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
          <p className="mt-2 text-sm text-gray-500">Handpicked favorites for your daily routine.</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
