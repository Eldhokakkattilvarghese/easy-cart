import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//screens
import homeScreen from './screens/homeScreen'
import cartScreen from './screens/cartScreen'
import productScreen from './screens/productScreen'

//Components

import Navbar from "./componenets/Navbar";
import Backdrop from "./componenets/Backdrop";
import SideDrawer from "./componenets/SideDrawer";

function App() {

  const [sideToggle, setSideToggle] = useState(false)



  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Routes>
          <Route exact path="/" componenet={homeScreen}></Route>
          <Route exact path="/product/:id" componenet={productScreen}></Route>
          <Route exact path="/cart" componenet={cartScreen}></Route>
        </Routes>
      </main>


    </Router>
  );
}

export default App;
