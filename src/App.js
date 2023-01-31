import { createContext, useEffect, useState } from "react";
import About from "./components/about/about";
import First from "./components/first/first";
import axios from "axios";

let DataContext = createContext();

function App() {
  let [products, setProduct] = useState();

  async function AxiosData() {
    let response = await axios("https://jsonplaceholder.typicode.com/posts");
    setProduct(response.data);
  }

  useEffect(() => {
    AxiosData();
  }, []);

  return (
    <>
      <DataContext.Provider value={products}>
        <First title="Hello world" box={false} />
        <About />
      </DataContext.Provider>
    </>
  );
}

export { DataContext, App };
