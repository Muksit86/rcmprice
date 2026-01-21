import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import priceData from '../data/Price-List.json';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts(priceData);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Product Catalog
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Browse our complete collection of products
                    </p>
                    {!loading && (
                        <p className="text-sm text-gray-500">
                            {products.length} products available
                        </p>
                    )}
                </div>

                {/* Products Grid */}
                <ProductList products={products} loading={loading} />
            </div>
        </div>
    );
};

export default Home;
