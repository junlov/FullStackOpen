import React from "react";

export default function PersonForm(props) {
  const {
    handleSubmit,
    handleNameInput,
    handleNumberInput,
    newNumber,
    newName,
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
