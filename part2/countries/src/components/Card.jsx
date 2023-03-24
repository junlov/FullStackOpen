import React from "react";

const Card = (props) => {
  const { country } = props;
  return (
    <>
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
                Address
              </a>
            </div>
            <div
              className="-ml-px flex w-0 flex-1"
              onClick={() => alert("More info")}
            >
              <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                Info
              </p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
