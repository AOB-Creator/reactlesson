import { DiAndroid } from "react-icons/di";
import { GrAchievement, GrAlarm } from "react-icons/gr";
import "./button.css";

function Buttontext(props) {
  let { content } = props;

  function timer() {
    let time = new Date();
    let hour = time.getHours();
    let minut = time.getMinutes();

    alert(`${hour}:${minut}`);
  }

  return (
    <button className="btn">
      {/* <GrAchievement id="icon" />
      <GrAlarm id="icon" /> */}
      <span>{content}</span>
      {/* <DiAndroid id="icon" /> */}
    </button>
  );
}

export default Buttontext;
