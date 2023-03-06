import React from "react";

export default function Total({ props }) {
  return (
    <div>
      {" "}
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
}
