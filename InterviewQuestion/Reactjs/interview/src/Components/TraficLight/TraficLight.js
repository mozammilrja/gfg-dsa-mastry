import { useEffect, useState } from "react";

const TraficLight = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    if (light !== "") {
      let time = setTimeout(() => {
        setLight((prev) =>
          prev === "red" ? "yellow" : prev === "yellow" ? "green" : "red"
        );
      }, 1000);
      return () => clearTimeout(time);
    }
  }, [light]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Traffic Light</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {["red", "yellow", "green"].map((color) => (
          <div
            key={color}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: light === color ? color : "gray",
              margin: "5px",
            }}
          ></div>
        ))}
      </div>
      <p>Current Light: {light}</p>
    </div>
  );
};

export default TraficLight;
