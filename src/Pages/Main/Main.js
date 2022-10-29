import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";

function Main() {
  return (
    <div>
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </div>
  );
}

export default Main;
