import { useState } from "react";

const Starting = () => {
  const [rating, setRating] = useState(0);
  const handleStarRating = (i) => {
    setRating(i + 1);
  };
  const handleStarResate = () => {
    setRating(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Star Rating</h1>
      <div
        style={{
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "0",
          padding: "0",
        }}
      >
        {[1, 2, 3, 4, 5].map((star, i) => (
          <span
            key={i}
            style={{
              cursor: "pointer",
              color: rating > i ? "orange" : "gray",
            }}
            onClick={() => handleStarRating(i)}
          >
            ★
          </span>
        ))}
      </div>
      <p>Current Rating : {rating}</p>
      <button onClick={handleStarResate}>Reset Star</button>
    </div>
  );
};
export default Starting;
