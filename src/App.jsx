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
import Projects from "./components/projects/Projects";

function App() {
    return (
        <div className={style.Body}>
            <BrowserRouter>
                <Nav className={style.Nav} />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
