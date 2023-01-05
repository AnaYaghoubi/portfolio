import React from "react";

const ProgressBar = () => {
  return (
    <div>
      <div>
        <h2>Vaardigheden: </h2>
      </div>

      <div style={{ paddingLeft: "1.3rem" }}>
        <label>React </label>
        <progress value="70" max="100">
          {" "}
          70%{" "}
        </progress>{" "}
        <br />
        <label>HTML </label>
        <progress value="90" max="100">
          {" "}
          90%{" "}
        </progress>{" "}
        <br />
        <label>CSS </label>
        <progress value="80" max="100">
          {" "}
          80%{" "}
        </progress>{" "}
        <br />
        <label>TypeScript </label>
        <progress value="80" max="100">
          {" "}
          80%{" "}
        </progress>{" "}
        <br />
        <label>C# </label>
        <progress value="75" max="100">
          {" "}
          75%{" "}
        </progress>
        <hr />
      </div>
    </div>
  );
};

export default ProgressBar;
