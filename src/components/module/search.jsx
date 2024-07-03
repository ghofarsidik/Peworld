/* eslint-disable react/prop-types */
import { useState } from "react";
import isearch from "../images/logo/search.png";

const sortOptions = [
  { label: "Name A-Z", value: "name", sortBy: "ASC" },
  { label: "Name Z-A", value: "name", sortBy: "DESC" },
  { label: "Domicile", value: "domicile", sortBy: "ASC" },
];

const Search = ({
  searchInput,
  setSearchInput,
  handleSearch,
  handleSortChange,
}) => {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  return (
    <div className="m-9 max-w-[1140px] h-[70px] font-Osans flex items-center justify-end px-1 py-[7px] bg-white mx-auto shadow-xl">
      <input
        className="px-[18px] h-[54px] flex-grow"
        type="text"
        placeholder="Pencarian"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="flex justify-end md:mr-9 max-w-[1140px] mx-auto">
        <div className="relative flex">
          <button
            className="w-32 h-14 text-base font-semibold text-center text-abu-pj border-abu-pj border-l-2"
            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
          >
            Sort
          </button>
          {isSortDropdownOpen && (
            <ul className="absolute bg-white border border-gray-300 mt-1 w-32 z-10">
              {sortOptions.map((sortOption) => (
                <li
                  key={sortOption.label}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    handleSortChange(sortOption.value, sortOption.sortBy);
                    setIsSortDropdownOpen(false);
                  }}
                >
                  {sortOption.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <button
          className="w-14 h-14 flex items-center justify-center"
          onClick={handleSearch}
        >
          <img className="w-6 h-6" src={isearch} alt="search" />
        </button>
        <button
          className="w-[120px] h-[54px] mx-1 text-base font-semibold text-center text-white bg-ungu-pj rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
