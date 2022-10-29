import React from "react";
import Sidebar from "../../../Components/Sidebar";
import Survey from "../Survey/Survey";

function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <Sidebar />
      </div>
      <div
      // style={{
      //   marginRight: "20px",
      // }}
      >
        <Survey />
        <Survey />
        <Survey />
        <Survey />
        <Survey />
        <Survey />
      </div>
    </div>
  );
}

export default Dashboard;
