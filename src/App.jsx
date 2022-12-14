import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import style from "./App.module.scss";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
    return (
        <BrowserRouter>
            <div className={style.Body}>
                <Nav className={style.Nav} />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
