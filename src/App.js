import { useEffect, useState } from "react";
import "./App.css";
import LoadingPage from "./components/load";
import Cards from "./components/card/cards";
function App() {
  let [count, setCount] = useState(12);
  let [loading, setLoad] = useState(true);
  let [product, setData] = useState([]);
  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }

  async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setData(data);
    console.log(data);
    setTimeout(() => {
      setLoad(!loading);
    }, 100);
  }
  let text = "data";
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <div className="page">
        <button
          onClick={function () {
            Increment();
          }}
        >
          increment
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            Decrement();
          }}
        >
          Decrement
        </button>
        <Cards products={product} />
      </div>
    );
  }
}

export default App;
