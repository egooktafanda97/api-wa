import React from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';
export default function FormSeracrh() {
  return (
    <div className="">
      <div className="max-w-md mx-auto text-gray-600 rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full">
            <div className="relative">
              <FaSearch className="absolute fa fa-search text-gray-400 top-3 left-4" />
              <input
                type="text"
                className="bg-gray-100 border border-gray-200 h-10 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
              />
              <span className="absolute top-3 right-5 border-l pl-4">
                <FaFilter />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
