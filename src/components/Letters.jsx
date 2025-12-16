import React, { useState } from "react";

const Letters = () => {
  const alphabets= [...new Array(26)].map((x,i)=>String.fromCharCode(97+i));

  // single state array → index = letter position
  const [clicks, setClicks] = useState(Array(26).fill(0));
  console.log("clicks are:::",clicks)

  const handleClick = (index) => {
    setClicks((prev) => {
      const updated = [...prev];
      updated[index] += 1;
      return updated;
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Alphabet Click Converter</h2>s

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {alphabets.map((letter, index) => {
          const finalLetter =
            clicks[index] >= 3 ? letter.toUpperCase() : letter;

          return (
            <div
              key={index}
              style={{
                padding: 12,
                border: "1px solid #ddd",
                borderRadius: 8,
                textAlign: "center",
                width: 60,
                background: "#fafafa"
              }}
              onClick={()=>handleClick(index)}
            >
              <h4 className="text-red-800 font-bold">{finalLetter}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Letters;
