import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time === 0) return;
    let interval = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [time]);

  return (
    <div>
      <h1>Count down timer {time} </h1>
    </div>
  );
};

export default Timer;
