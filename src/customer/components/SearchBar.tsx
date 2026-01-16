import React, { useState } from "react";

const categories = [
  { id: "all", label: "All Categories" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "electronics", label: "Electronics" },
  { id: "home", label: "Home & Furniture" },
];

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="w-full flex mt-2 justify-center">
      <div className="flex gap-2 items-center w-[95%] max-w-6xl">

        {/* Category */}
        <div className="flex items-center bg-white border border-gray-200 rounded-lg h-[44px] px-4 w-[190px] shadow-sm">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center w-full">
        {/* Search Input */}
        <div className="bg-white border border-gray-200 rounded-lg h-[44px] flex-1 shadow-sm">
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-full px-5 text-sm text-gray-700 outline-none rounded-l-lg"
          />
        </div>

        {/* Button */}
        <button
          className="h-[44px] px-10 w-[140px] bg-teal-600 text-white text-sm font-medium rounded-r-lg hover:bg-teal-700 transition shadow-sm"
        >
          Search
        </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
