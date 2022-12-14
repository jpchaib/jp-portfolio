import React from "react";
import style from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Nav = () => {
    const [active, setActive] = useState([true, true, true, true, true]);

    useEffect(() => {}, []);

    const handleMouseEnter = (event) => {
        console.log(event);
        const arr = [...active];
        arr[parseInt(event.target.attributes.name.value)] = false;
        setActive(arr);
    };
    const handleMouseLeave = (event) => {
        console.log(event);
        const arr = [...active];
        arr[parseInt(event.target.attributes.name.value)] = true;
        setActive(arr);
    };

    return (
        <div className={style.Bar}>
            <div className={style.Right}>
                <NavLink name="0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.Link} to="/">
                    {(active[0] && "Home") || (!active[0] && "<Home/>")}
                </NavLink>
                <NavLink name="1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.Link} to="/about">
                    {(active[1] && "About") || (!active[1] && "<About/>")}
                </NavLink>
                <NavLink name="2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.Link} to="/skills">
                    {(active[2] && "Skills") || (!active[2] && "<Skills/>")}
                </NavLink>
                <NavLink name="3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.Link} to="/projects">
                    {(active[3] && "Projects") || (!active[3] && "<Projects/>")}
                </NavLink>
                <NavLink name="4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.Link__last} to="/contact">
                    {(active[4] && "Contact") || (!active[4] && "<Contact/>")}
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
