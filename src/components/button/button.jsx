import { useContext } from "react";
import { Context } from "../main/main";

function ButtonText() {
  let data = useContext(Context);
  let { btn, setBtn } = data;

  return (
    <button
      onClick={() => {
        setBtn(btn + 1);
      }}
      className="btns"
    >
      {btn}
    </button>
  );
}

export default ButtonText;
