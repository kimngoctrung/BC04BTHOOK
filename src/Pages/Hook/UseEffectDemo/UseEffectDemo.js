import React, { useState, useEffect } from "react";

export default function UseEffectDemo() {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    //   call api
    //   sử dụng carousel, thư viện khác...
    console.log("componentDidMout");
    return () => {
      // hàm này se thực thi trước khi component mất khỏi giao diện
      console.log("componentWillUnmount");
    };
  }, []);
  useEffect(() => {
    //gọi sau mỗi lần render kể cả lần đầu tiên
    console.log("Thay thế 2 lifecyle componentDidMount và componentDidUpdate");
    // Hạn chế setState
  });
  useEffect(() => {
    //   call api
    //   sử dụng carousel, thư viện khác...
    console.log("componentDidMout2");
  }, [number]);
  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-warning"
      >
        +
      </button>
    </div>
  );
}
