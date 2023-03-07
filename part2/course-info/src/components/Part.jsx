import React from "react";

export default function Part({ name, exercises, id }) {
  return (
    <div>
      <p key={id}>
        {name} {exercises}
      </p>
    </div>
  );
}
