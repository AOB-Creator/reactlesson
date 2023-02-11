import { createContext, useEffect, useState } from "react";
import Loading from "./components/loading/load";
import "./App.scss";
import { Main } from "./components/main/main";
import axios from "axios";

let DataContext = createContext();

function App() {
  let [products, setProduct] = useState([]);
  let [loading, setLoad] = useState(true);

  async function TakeData() {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setProduct(response.data);
    console.log(response.data);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }
  useEffect(() => {
    TakeData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <DataContext.Provider value={products}>
        <Main />
      </DataContext.Provider>
    </>
  );
}
export { App, DataContext };
