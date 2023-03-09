import { PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [filterBool, setFilterBool] = useState(false);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((country) => {
      setCountries(country.data);
      console.log(country.data);
    });
  }, []);

  const handleFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });

      setFilterBool(true);
      setFilterName(results);
    } else {
      setFilterBool(false);
      setFilterName("");
    }
  };

  const countriesToShow = filterBool ? filterName : countries;

  return (
    <div className="bg-gray-300">
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
            onChange={handleFilter}
            className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
            placeholder="United States"
          />
        </div>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-7"
      >
        {countries !== null
          ? countriesToShow.map((country) => (
              <li
                key={country.name.common}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
              >
                <div className="flex flex-1 flex-col p-8">
                  <img
                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                    src={country.flags.png}
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {country.name.common}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Region</dt>
                    <dd className="text-sm text-gray-500">{country.region}</dd>
                    <dt className="sr-only">Native Name</dt>
                    <dd className="mt-3">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {country.capital}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        href={country.maps.googleMaps}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
                            clipRule="evenodd"
                          />
                        </svg>
                        National Address
                      </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                        <PhoneIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Call
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default App;
