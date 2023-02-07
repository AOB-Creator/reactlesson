import { useState } from "react";
import "./main.scss";
import image from "../../image/profile.png";
import deliver from "../../image/deliver (1).png";
function Main() {
  let [btn, setBtn] = useState("1");

  return (
    <section className="main">
      <div className="inner">
        <div className="left">
          <div className="top">
            <div className="logo">
              <img src={image} alt="" />
            </div>
            <p>Alka Yagik</p>
          </div>
          <ul>
            <li
              onClick={() => {
                setBtn("1");
              }}
              className={btn === "1" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => {
                setBtn("2");
              }}
              className={btn === "2" ? "active" : ""}
            >
              Menu
            </li>
            <li
              onClick={() => {
                setBtn("3");
              }}
              className={btn === "3" ? "active" : ""}
            >
              Trending
            </li>
            <li
              onClick={() => {
                setBtn("4");
              }}
              className={btn === "4" ? "active" : ""}
            >
              Settings
            </li>
          </ul>
          <div className="delivery">
            <img src={deliver} alt="" />
            <h5>
              Faster <br /> Delivery!
            </h5>
            <a href="">know more</a>
          </div>
        </div>
        <div className="right">
          <div className={btn === "1" ? "page" : "hidden"}>
            <h1>Home</h1>
          </div>
          <div className={btn === "2" ? "page" : "hidden"}>
            <h1>Menu</h1>
          </div>
          <div className={btn === "3" ? "page" : "hidden"}>
            <h1>Trending</h1>
          </div>
          <div className={btn === "4" ? "page" : "hidden"}>
            <h1>Settings</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
