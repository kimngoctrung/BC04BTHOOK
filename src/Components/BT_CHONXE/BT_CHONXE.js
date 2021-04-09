import React, { useState } from "react";

export default function BT_CHONXE() {
  const [stateCar, setStatecar] = useState({
    hinhAnh: "./Newfolder/black-car.jpg",
  });
  const doiMauXe = (newColor) => {
    setStatecar({ hinhAnh: `./Newfolder/${newColor}-car.jpg` });
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 ">
          <img style={{ width: "100%" }} src={stateCar.hinhAnh} alt="" />
        </div>
        <div className="col-6">
          <button
            onClick={() => {
              doiMauXe("black");
            }}
            style={{
              marginRight: "30px",
              backgroundColor: "black",
              color: "white",
            }}
            className="btn"
          >
            Black
          </button>
          <button
            onClick={() => {
              doiMauXe("red");
            }}
            style={{
              marginRight: "30px",
              backgroundColor: "red",
              color: "white",
            }}
            className="btn"
          >
            Red
          </button>
          <button
            onClick={() => {
              doiMauXe("silver");
            }}
            style={{
              marginRight: "30px",
              backgroundColor: "gray",
              color: "white",
            }}
            className="btn"
          >
            sliver
          </button>
          <button
            onClick={() => {
              doiMauXe("steel");
            }}
            style={{
              marginRight: "30px",
              backgroundColor: "wheat",
              color: "black",
            }}
            className="btn"
          >
            Steel
          </button>
        </div>
      </div>
    </div>
  );
}
