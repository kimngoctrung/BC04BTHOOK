import React, { useState } from "react";

export default function UseStateDemo(props) {
  /// UseState(): là hàm thư viện react thay thế this.state và this.setState của reactClassComponent
  const [state, setState] = useState({ number: 1 });
  const [number, setNumber] = useState(1);

  return (
    <div className="container">
      <h1 className="text-danger">Number: {number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-outline-success"
      >
        +
      </button>
      <h1>{state.number}</h1>
      <button
        onClick={() => {
          const newState = { number: state.number + 1 };
          setState(newState);
          //   setState({
          //     number: (state.number = 1),
          //   });
        }}
        className="btn btn-outline-danger"
      >
        +
      </button>
    </div>
  );
}
