import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchBar = ({ value, onChange, onClear, placeholder = "Search products..." }) => {
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
            </div>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-11 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            />

            {value && (
                <button
                    onClick={onClear}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                    <FiX className="text-xl" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
