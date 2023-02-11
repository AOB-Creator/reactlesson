import { createContext, useState } from "react";
import "./main.scss";
import image from "../../image/profile.png";
import deliver from "../../image/deliver (1).png";
import bluecircle from "../../image/Ellipse 2 (1).png";
import { FiAperture } from "react-icons/fi";
import Settings from "../setttings/settings";
import Menu from "../menu/menu";
import {
  AiOutlineHome,
  AiOutlineBug,
  AiOutlineCode,
  AiOutlineCrown,
} from "react-icons/ai";
import Home from "../home/home";
import Trending from "../Trending/trend";
import ButtonText from "../button/button";

let Context = createContext();

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
              <div className="icon">
                <AiOutlineHome />
              </div>
              <div className="text">Home</div>
            </li>
            <li
              onClick={() => {
                setBtn("2");
              }}
              className={btn === "2" ? "active" : ""}
            >
              <div className="icon">
                <AiOutlineBug />
              </div>
              <div className="text">Menu</div>
            </li>
            <li
              onClick={() => {
                setBtn("3");
              }}
              className={btn === "3" ? "active" : ""}
            >
              <div className="icon">
                <AiOutlineCode />
              </div>
              <div className="text">Trending</div>
            </li>
            <li
              onClick={() => {
                setBtn("4");
              }}
              className={btn === "4" ? "active" : ""}
            >
              <div className="icon">
                <AiOutlineCrown />
              </div>
              <div className="text">Settings</div>
            </li>
          </ul>
          <div className="delivery">
            <img src={deliver} className="f1" alt="" />
            <img src={bluecircle} className="f2" alt="" />
            <h5>
              Faster <br /> Delivery!
            </h5>
            <a href="">know more</a>
          </div>
        </div>
        <div className="right">
          <div className={btn === "1" ? "page" : "hidden"}>
            <Home />
          </div>
          <div className={btn === "2" ? "page" : "hidden"}>
            <Menu />
          </div>
          <div className={btn === "3" ? "page" : "hidden"}>
            <Trending />
          </div>
          <div className={btn === "4" ? "page" : "hidden"}>
            <Settings />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Main, Context };
