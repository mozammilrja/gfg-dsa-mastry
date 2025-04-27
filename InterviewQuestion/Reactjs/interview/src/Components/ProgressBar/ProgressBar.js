import React, { useEffect, useState } from "react";

// --------------------------------------------------------------------
// ProgressBar Component (Handles Animation)
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        let newProgress = prev + 5;
        console.log("newProgress :>> ", `${newProgress}%`);
        setPercentage(newProgress);

        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 100); // Smooth animation over 2 seconds (100ms × 20 = 2000ms)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Progress Bar {`${percentage}%`} </h3>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "10px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "20px",
            backgroundColor: "green",
            borderRadius: "10px",
            transition: "width 0.1s linear",
          }}
        ></div>
        <span
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {` ${percentage}`}%
        </span>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------
// ProgressBarItem Component (Handles Multiple Bars)
const ProgressBarItem = () => {
  const [progressBars, setProgressBars] = useState([]);

  const addProgressBar = () => {
    setProgressBars([...progressBars, { id: Date.now() }]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <button
        onClick={addProgressBar}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        Add Progress Bar
      </button>
      {progressBars.map((bar) => (
        <ProgressBar key={bar.id} />
      ))}
    </div>
  );
};

export default ProgressBarItem;
