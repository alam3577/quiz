import React, { useState } from "react";
import Ans2 from "./Ans2";

function Ans({ elem, ans }) {
  return (
    <div>
      {elem.options.map((elem, i) => (
        <Ans2 elem={elem} i={i} ans={ans} />
      ))}
    </div>
  );
}

export default Ans;
