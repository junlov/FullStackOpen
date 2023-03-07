import React from "react";

export default function Total({ course }) {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Number of exercises {total}</p>;
}
