import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [count, setCount] = useState(newTime);

  const getTime = () => {
    setCount(count);
  };

  return (
    <>
      <h1 className="text-center mt-5">React Hooks with useState</h1>
      <div className="text-center" style={{ marginTop: "30vh" }}>
        <h1>{count}</h1>
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
