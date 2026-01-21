import React from "react";

const ProductCard = ({ product }) => {
  const discount = Math.round(
    ((product.MRP - product["Sell Price"]) / product.MRP) * 100,
  );

  return (
    <div className="bg-white rounded-lg border border-black shadow-md hover:shadow-lg transition-all p-5">
      {/* Product Name */}
      <h3 className="text-base font-semibold text-gray-900 mb-4 line-clamp-2 min-h-12">
        {product["Product Name"]}
      </h3>

      {/* Product Details */}
      <div className="space-y-2 mb-4 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Item Code:</span>
          <span className="font-medium text-gray-900">
            {product["Item Code"]}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Article ID:</span>
          <span className="font-medium text-gray-900">
            {product["Article ID"]}
          </span>
        </div>
      </div>

      {/* Price Section */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-baseline justify-between mb-2">
          <div>
            <p className="text-base font-medium text-gray-600 mb-1">
              MRP: <span>₹{product.MRP}</span>
            </p>
            <p className="text-3xl font-bold text-gray-900">
              ID: ₹{product["Sell Price"]}
            </p>
          </div>

          {discount > 0 && (
            <div className="bg-secondary text-black px-2 py-0.5 rounded text-xs">
              {discount}% OFF
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
