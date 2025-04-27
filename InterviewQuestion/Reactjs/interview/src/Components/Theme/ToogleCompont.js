import React, { useState } from "react";

const ToogleCompont = () => {
  const [toogle, setToogle] = useState(false);

  const handleChenge = () => {
    setToogle((prev) => !prev);
  };

  return (
    <div>
      <h1>Toogle Light</h1>
      <button
        style={{ backgroundColor: toogle ? "red" : "white" }}
        onClick={handleChenge}
      >
        Toogle
      </button>
    </div>
  );
};

export default ToogleCompont;
