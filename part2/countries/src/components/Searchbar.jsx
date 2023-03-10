import React from "react";

const Searchbar = (props) => {
  return (
    <div>
      <div className="container mx-auto px-5 p-4">
        <label
          htmlFor="Country name"
          className="ml-px block pl-4 text-sm leading-6 text-gray-900 md:text-lg font-bold"
        >
          Find Countries
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            onChange={props.handleFilter}
            className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
            placeholder="United States"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
