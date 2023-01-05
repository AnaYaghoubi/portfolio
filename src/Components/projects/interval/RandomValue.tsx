import React, { useEffect, useState } from "react";

const getRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

interface RandomValueProps {
  min: number;
  max: number;
}

const RandomValue = ({ min, max }: RandomValueProps) => {
  const [randomValue, setRandomValue] = useState(getRandomValue(min, max));

  useEffect(() => {
    let handle = setInterval(() => {
      setRandomValue(getRandomValue(min, max));
    }, 2000);

    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <div>
      <p>
        Random value between {min} and {max}: {randomValue}
      </p>
    </div>
  );
};

export default RandomValue;
