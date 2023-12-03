import React from "react";
// import Kam from "./kamni1.jpg";
// import Kams from "./Kamni2.jpg";
// import Kamk from "./kamni3.jpg";
// import "./kamni1.jpg";
// import kamni2 from "./Kamni2.jpg";
// import "./kamni3.jpg";
import "./video.css";

const elements = [
  {
    id: 1,
    foto: require("./vid.mp4"),
    title: "Весна",
    singer: "Роман",
    poster: require("./kamni1.jpg"),
  },
  {
    id: 2,
    foto: require("./vid.mp4"),
    title: "Зима",
    singer: "Иван",
    poster: require("./Kamni2.jpg"),
  },
  {
    id: 3,
    foto: require("./vid.mp4"),
    title: "Осень",
    singer: "Петро",
    poster: require("./kamni3.jpg"),
  },
];

export function Videka() {
  return (
    <div className="elements">
      {elements.map((element) => {
        return (
          <div key={element.id} className="element">
            {/* <img src={element.foto} width="300px" height="150px" alt=""></img>
             */}
            <video
              src={element.foto}
              controls
              width="300px"
              height="150px"
              poster={element.poster}
            ></video>
            <h1>{element.title}</h1>
            <p>{element.singer}</p>
          </div>
        );
      })}
    </div>
  );
}
