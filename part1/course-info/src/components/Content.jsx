import React from "react";
import Part from "./Part";

export default function Content({ props }) {
  return (
    <div>
      <Part prop1={props.part1} prop2={props.exercises1} />
      <Part prop1={props.part2} prop2={props.exercises2} />
      <Part prop1={props.part3} prop2={props.exercises3} />
    </div>
  );
}
