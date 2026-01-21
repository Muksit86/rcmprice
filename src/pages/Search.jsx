import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import priceData from "../data/Price-List.json";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(priceData);
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let results = [...priceData];

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        results = results.filter(
          (product) =>
            product["Product Name"].toLowerCase().includes(query) ||
            product["Item Code"].toString().includes(query) ||
            product["Article ID"].toString().includes(query),
        );
      }

      // Sort results
      switch (sortBy) {
        case "price-low":
          results.sort((a, b) => a["Sell Price"] - b["Sell Price"]);
          break;
        case "price-high":
          results.sort((a, b) => b["Sell Price"] - a["Sell Price"]);
          break;
        case "discount":
          results.sort((a, b) => {
            const discountA = ((a.MRP - a["Sell Price"]) / a.MRP) * 100;
            const discountB = ((b.MRP - b["Sell Price"]) / b.MRP) * 100;
            return discountB - discountA;
          });
          break;
        case "name":
        default:
          results.sort((a, b) =>
            a["Product Name"].localeCompare(b["Product Name"]),
          );
          break;
      }

      setFilteredProducts(results);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, sortBy]);

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Search Products
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find products by name, item code, or article ID
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={handleClear}
              placeholder="Search products..."
            />
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4 flex-wrap">
            <label className="text-xl font-medium text-gray-700">
              Sort by:
            </label>
            <div className="flex px-2 gap-5 overflow-scroll md:overflow-hidden">
              <button
                onClick={() => setSortBy("name")}
                className={`cursor-pointer py-2 text-nowrap text-md font-medium transition-colors ${sortBy === "name"
                  ? "border-b-2 text-accent"
                  : " text-gray-700 hover:bg-gray-50"
                  }`}
              >
                Name (A-Z)
              </button>
              <button
                onClick={() => setSortBy("price-low")}
                className={`cursor-pointer py-2 text-nowrap text-md font-medium transition-colors ${sortBy === "price-low"
                  ? "border-b-2 text-accent"
                  : " text-gray-700 hover:bg-gray-50"
                  }`}
              >
                Price: Low to High
              </button>
              <button
                onClick={() => setSortBy("price-high")}
                className={`cursor-pointer py-2 text-nowrap text-md font-medium transition-colors ${sortBy === "price-high"
                  ? "border-b-2 text-accent"
                  : " text-gray-700 hover:bg-gray-50"
                  }`}
              >
                Price: High to Low
              </button>
              <button
                onClick={() => setSortBy("discount")}
                className={`cursor-pointer py-2 text-nowrap text-md font-medium transition-colors ${sortBy === "discount"
                  ? "border-b-2 text-accent"
                  : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                Best Discount
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              {loading ? (
                "Searching..."
              ) : (
                <>
                  Found{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredProducts.length}
                  </span>{" "}
                  product{filteredProducts.length !== 1 ? "s" : ""}
                  {searchQuery && (
                    <span className="ml-1">for "{searchQuery}"</span>
                  )}
                </>
              )}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <ProductList products={filteredProducts} loading={loading} />
      </div>
    </div>
  );
};

export default Search;
