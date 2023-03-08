import React from "react";

export default function Filter({ handleFilter }) {
  return (
    <div>
      <p>
        Filter Shown With <input onChange={handleFilter} />
      </p>
    </div>
  );
}
