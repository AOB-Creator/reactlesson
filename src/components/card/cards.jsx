import { useContext } from "react";
import { DataContext } from "../../App";
function Cards() {
  let box = useContext(DataContext);
  return <h1>Cards {box.length}</h1>;
}

export default Cards;
