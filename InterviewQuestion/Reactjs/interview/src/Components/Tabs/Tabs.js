import React, { useState } from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderTab = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;

      default:
        return <Home />;
    }
  };

  const tabList = [{ name: "Home" }, { name: "About" }, { name: "Contact" }];

  return (
    <div>
      <h1>Tabs</h1>

      <div>
        {tabList.map((tab) => (
          <button
            style={{ color: activeTab === tab.name ? "blue" : "" }}
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {renderTab()}
    </div>
  );
};

export default Tabs;
