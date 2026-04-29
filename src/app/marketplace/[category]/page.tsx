'use client';

interface MarketplacePageProps {
  params: { category: string }
}

const categories = {
  digital: {
    title: 'Digital Products',
    subtitle: 'Courses, templates, eBooks, scripts',
    products: [
      { name: 'Python Bootcamp', price: 49, image: '/products/python.jpg' },
      { name: 'YouTube Scripts Pack', price: 29, image: '/products/scripts.jpg' },
      { name: 'Figma UI Kit', price: 79, image: '/products/figma.jpg' }
    ]
  },
  physical: {
    title: 'Physical Goods',
    subtitle: 'Handcrafted, local artisan products',
    products: [
      { name: 'Maasai Bracelets', price: 25, image: '/products/bracelets.jpg' },
      { name: 'Arusha Coffee', price: 15, image: '/products/coffee.jpg' },
      { name: 'Tanzanite Jewelry', price: 199, image: '/products/tanzanite.jpg' }
    ]
  }
};

export default function MarketplaceCategory({ params }: MarketplacePageProps) {
  const data = categories[params.category as keyof typeof categories] || categories.digital;

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-primaryGold via-white to-primaryGold bg-clip-text text-transparent">
            {data.title}
          </h1>
          <p className="text-2xl text-white/80">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.products.map((product, index) => (
            <div key={product.name} className="glass-card group rounded-3xl overflow-hidden hover:shadow-goldGlow transition-all cursor-pointer">
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black group-hover:scale-110 transition-transform duration-500">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-primaryGold/90 text-navy px-3 py-1 rounded-full text-sm font-bold">
                  ${product.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primaryGold font-semibold text-lg">${product.price}</span>
                  <button className="px-6 py-3 rounded-full bg-primaryGold text-navy font-bold hover:bg-goldBright hover:shadow-goldGlow transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
