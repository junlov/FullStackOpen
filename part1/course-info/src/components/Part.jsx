import React from "react";

export default function Part({ name, exercises }) {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
}
