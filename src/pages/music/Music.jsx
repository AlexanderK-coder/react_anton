import React from "react";
// import "./music.css";

import { Videka } from "../../components/videka/videka";

export const Music = () => {
  return (
    <>
      <div className="music">
        <div className="head">
          <p>Это музыкальная страница</p>
        </div>

        <div>
          <Videka />
        </div>
      </div>
    </>
  );
};
