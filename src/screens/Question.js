import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { question } from "../Data/Data";
function Question() {
  const [score, setScore] = useState(0);
  const [color, setcolor] = useState("");
  //   const [ans, setAns] = useState([]);
  let answers = [];
  let { lang } = useParams();
  const handleClick = (elem, ans) => {
    setcolor("blue");
    if (elem === ans) {
      if (!answers.includes(ans)) {
        answers.push(ans);
      }
    }
    console.log(answers);
  };

  return (
    <>
      <hr />
      <h1 id="j">h1</h1>
      <h2 style={{ marginLeft: "29vw" }}>Welcome to {lang} Questions</h2>
      <div className="question__container">
        <div className="question">
          {score}
          {question.map((elem, i) => {
            const { ans } = elem;
            return (
              <div key={elem.id}>
                <h4>{elem.ques}</h4>
                {elem.options.map((elem, i) => (
                  <div className="btn" style={{ background: color }} key={i}>
                    <button
                      style={{ background: color }}
                      onClick={() => handleClick(elem, ans)}
                    >
                      {elem}
                    </button>
                    <br />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Question;
