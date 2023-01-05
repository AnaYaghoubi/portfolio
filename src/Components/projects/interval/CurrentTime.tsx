import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let handle = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <>
      <p>
        Current time: <strong>{time.toLocaleTimeString()}</strong>
      </p>
    </>
  );
};

export default CurrentTime;
