import React, { useState } from "react";

function Ans2({ elem, i, ans }) {
  const [color, setcolor] = useState("");
  let answers = [];
  const handleClick = (elem, ans) => {
    if (!color) {
      setcolor("blue");
    } else {
      setcolor("");
    }
    if (elem === ans) {
      if (!answers.includes(ans)) {
        answers = [...answers, ans];
      }
    }
    console.log(answers);
  };
  return (
    <div className="btn" style={{ background: color }} key={i}>
      <button
        style={{ background: color }}
        onClick={() => handleClick(elem, ans, i)}
      >
        {elem}
      </button>
      <br />
    </div>
  );
}

export default Ans2;
