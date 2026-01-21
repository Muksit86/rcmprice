import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, loading = false }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-2 border-gray-300 border-t-gray-900 mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-2">No products found</p>
          <p className="text-gray-500">Try adjusting your search</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product, index) => (
        <ProductCard
          key={`${product["Item Code"]}-${index}`}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
