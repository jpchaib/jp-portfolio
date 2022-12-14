import React from "react";
import style from "./Home.module.scss";

const Home = () => {
    return (
        <div>
            <div className={style.Chatbox}>
                <div className={style.csstyping}>
                    <p>Hi, my name is Joao Pedro Chaib</p>
                    <p>
                        But you can call me <b>JP</b>
                    </p>
                    <p>I'm a full-stack web developer</p>
                    <p>
                        <b>Welcome</b> to my portfolio
                    </p>
                </div>
            </div>
            <img className={style.Face} src="src/assets/images/avatar.png" alt="" />
        </div>
    );
};

export default Home;
