import React, { useState } from "react";

const GoogleSheet = () => {
  const initialMatrix = [
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
  ];
  const [cells, setCells] = useState(initialMatrix);
  function handleRowAdd() {
    const newRow = new Array(cells[0].length).fill("");
    setCells((cells) => [...cells, newRow]);
  }
  function handleColumnAdd() {
    setCells((cells) => {
      return cells.map((cell, _) => [...cell, ""]);
    });
  }
  function handleCellChange(e, rowIdx, colIdx) {
    let value = e.target.value;
    setCells((prev) => {
      const copied = prev.map((row) => [...row]);
      console.log(copied);
      copied[rowIdx][colIdx] = value;
      return copied;
    });
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-center mb-4 text-xl">Google Sheet</h1>
        {cells?.map((cell, rowIdx) => (
          <div key={rowIdx} className="flex justify-center">
            {cell?.map((singleCell, colIdx) => (
              <input
                key={`${rowIdx}-${colIdx}`}
                value={singleCell}
                className="p-2 m-2 border-2 border-white rounded-md w-20 text-center"
                onChange={(e) => handleCellChange(e, rowIdx, colIdx)}
              />
            ))}
          </div>
        ))}
        <div className="w-full my-4 flex justify-center gap-4">
          <button onClick={handleRowAdd}>Add Row</button>
          <button onClick={handleColumnAdd}>Add Column</button>
        </div>
      </div>
    </div>
  );
};

export default GoogleSheet;
