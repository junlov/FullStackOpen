import React from "react";

export default function Person({ name, number, handleDelete, id }) {
  return (
    <div>
      <li key={id}>
        <p>
          <b>{name}</b> {number}{" "}
          <button
            style={{
              color: "black",
              backgroundColor: "lightblue",
              fontWeight: "bold",
            }}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </p>
      </li>
    </div>
  );
}
