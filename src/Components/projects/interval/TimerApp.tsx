import React from "react";
import Timer from "./Timer";
import CurrentTime from "./CurrentTime";
import RandomValue from "./RandomValue";


const TimerApp = () => {
    return (
      <div>
        <div><Timer /></div>
        <div><CurrentTime/></div>
        <div>
          <RandomValue min={1} max={100}/>
        </div>
        <div>
          <RandomValue min={100} max={200}/>
        </div>
      </div>
    );
  };
  

  export default TimerApp;