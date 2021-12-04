import React from "react";
import ReactDOM from "react-dom";
//import Lifecycle from "./Lifecycle";
import Index from "./tugas2/Index";

// import Mobil from "./Mobil";
// import Laptop from "./Laptop";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <Lifecycle /> */}
    <Index />

    {/* <Mobil />
    <Laptop /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
