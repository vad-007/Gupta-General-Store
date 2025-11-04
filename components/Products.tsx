import React from 'react';

const ProductCard: React.FC<{ imageUrl: string; title: string; description: string }> = ({ imageUrl, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Products: React.FC = () => {
  const productCategories = [
    {
      title: 'Groceries',
      description: 'Staples like flour, rice, sugar, oils, and spices.',
      imageUrl: 'https://picsum.photos/400/300?image=20',
    },
    {
      title: 'Toiletries',
      description: 'Soaps, shampoos, toothpaste, and other daily hygiene products.',
      imageUrl: 'https://picsum.photos/400/300?image=669',
    },
    {
      title: 'Packaged Food',
      description: 'Biscuits, noodles, sauces, and ready-to-eat meals.',
      imageUrl: 'https://picsum.photos/400/300?image=312',
    },
    {
      title: 'Snacks & Beverages',
      description: 'Chips, soft drinks, juices, and a variety of snacks.',
      imageUrl: 'https://picsum.photos/400/300?image=103',
    },
    {
      title: 'Home Cleaning',
      description: 'Detergents, disinfectants, and other cleaning supplies.',
      imageUrl: 'https://picsum.photos/400/300?image=319',
    },
    {
      title: 'Personal Care',
      description: 'Skincare, haircare, and personal grooming items.',
      imageUrl: 'https://picsum.photos/400/300?image=431',
    },
    {
        title: 'Stationery',
        description: 'Pens, notebooks, and basic office & school supplies.',
        imageUrl: 'https://picsum.photos/400/300?image=24',
    },
    {
        title: 'Household Essentials',
        description: 'Light bulbs, batteries, and other small home necessities.',
        imageUrl: 'https://picsum.photos/400/300?image=175',
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Products</h2>
        <div className="w-24 h-1 bg-brand-blue mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category) => (
            <ProductCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
