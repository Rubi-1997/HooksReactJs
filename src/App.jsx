import { useState } from "react";

import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom"

import "./App.css";
// import MainContainer from "./MainContainer.jsx";
// import PaymentPage from "./PaymentPage.jsx";

function App() {
 

  return (
    <>
      <Navbar />
     
      <Outlet/>
     
    </>
  );
}

export default App;
