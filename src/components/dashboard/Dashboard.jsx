import React from "react";

const Dashboard = () => {
  return (
    <section>
      <div className="top-section">
        <div className="logo">
          HRMI{" "}
          <span
            style={{
              backgroundColor: "white",
              color: "#14C1EC",
              padding: "0.1em",
            }}
          >
            SYSTEM
          </span>
        </div>
      </div>
      <div className="side-menu">
        <div className="nav-bar">Navigation</div>
      </div>
    </section>
  );
};

export default Dashboard;
