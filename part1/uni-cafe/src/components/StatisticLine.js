import React from "react";

export default function StatisticLine({ text, value }) {
  return (
    <>
      <tr>
        {text}
        <td>{value}</td>
      </tr>
    </>
  );
}
