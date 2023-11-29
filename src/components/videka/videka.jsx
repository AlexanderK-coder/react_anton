import React from "react";
// import Kam from "./kamni1.jpg";
// import Kams from "./Kamni2.jpg";
// import Kamk from "./kamni3.jpg";
// import "./kamni1.jpg";
// import "./Kamni2.jpg";
// import "./kamni3.jpg";

const elements = [
  {
    id: 1,
    foto: require("./kamni1.jpg"),
    title: "Весна",
    singer: "Роман",
  },
  {
    id: 2,
    foto: require("./Kamni2.jpg"),
    title: "Зима",
    singer: "Иван",
  },
  {
    id: 3,
    foto: require("./kamni3.jpg"),
    title: "Осень",
    singer: "Петро",
  },
];

export function Videka() {
  return (
    <>
      {elements.map((element) => {
        return (
          <div key={element.id} className="element">
            <img src={element.foto} width="300px" height="150px" alt=""></img>
            <h1>{element.title}</h1>
            <p>{element.singer}</p>
          </div>
        );
      })}
    </>
  );
}
