import React from "react";

export default function Person({ name, number }) {
  return (
    <div>
      <li key={name}>
        {name} {number}
      </li>
    </div>
  );
}
