import { useEffect, useState } from "react";
import Loading from "./components/loading/load";
import "./App.scss";
import Main from "./components/main/main";
import axios from "axios";
function App() {
  let [products, setProduct] = useState([]);
  let [loading, setLoad] = useState(true);

  async function TakeData() {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setProduct(response.data);
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
      <Main />
    </>
  );
}
export { App };
