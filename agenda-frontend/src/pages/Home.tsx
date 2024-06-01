import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>Please select your Organisation</h2>
          <p>This will display your employees</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
