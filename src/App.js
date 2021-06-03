import React, { useState } from "react";

const App = () => {
  //for showing the time at beginning of page reload
  let newPreTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(newPreTime);

  //fetch current time when you click on the button
  const getTime = () => {
    let newPostTime = new Date().toLocaleTimeString();
    setTime(newPostTime);
  };

  return (
    <>
      <h1 className="text-center mt-5">React - useState</h1>
      <div className="text-center" style={{ marginTop: "30vh" }}>
        <h1>{time}</h1>
        <br />
        <button
          onClick={getTime}
          type="button"
          className="btn btn-primary btn-xl"
          style={{ marginRight: "15px" }}
        >
          Get Time
        </button>
      </div>
      <h6 className="text-center" style={{ marginTop: "30vh" }}>
        Copyright &copy; 2021 Sanajit Jana. All Rights Reserved.
      </h6>
    </>
  );
};

export default App;
