import { useState } from "react";
import "./first.css";

function First(props) {
  console.log(props);
  let { title, box } = props;

  let [count, setCount] = useState("");

  return (
    <div className="first">
      <h1>First {count}</h1>
      <p>{title}</p>
      <button
        onClick={() => {
          setCount((prev) => {
            let ranchar = String.fromCharCode(
              Math.floor(Math.random() * 100 + 50)
            );
            return prev + ranchar;
          });
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default First;
