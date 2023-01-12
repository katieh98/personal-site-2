import './App.css';
import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Socials from "./components/Socials/Socials"

export default function App() {

  return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <NavBar />
            <Route path="/About" component={About} />
            <Route exact path="/" component={Home} />
        </BrowserRouter>
        <Socials />
        <Footer />
      </div>
  );
}