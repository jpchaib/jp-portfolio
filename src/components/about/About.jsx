import React from "react";
import style from "./About.module.scss";
const About = () => {
    const images = ["photoFromInternet", "photoFromInternet2", "photoFromInternet3"];

    return (
        <div className={style.Body}>
            <section className={style.Head}>
                <div className={style.Text}>
                    <h1 className={style.Title}> {"<Jp/>"}</h1>
                    <p className={style.Text__left}>Born in Brazil and a Permanent Resident in Australia, I hold a bachelor degree in Mechanical Engineering from the Federal University of Minas Gerais, completed in 2016, and since then I have been accumulating experience in Industrial Manufacturing, Project Management and R&D.</p>
                    <p className={style.Text__right}>As a Software Engineer Trainee in _nology, I am pursuing my dream of working in Tech. Technology has always been Man's best friend throughout history, it is the present and it will be the future. It can improve quality of life and speed tasks that once took years to complete. As a society, we have reached the point where one can impact others lives across the globe, at the speed of light, and this excites me. I also believe that this great power is followed by the responsibility of building a better world for future generations, aiming for sustainability and equilibrium.</p>
                    <p className={style.Text__left}>You will see that I am a fast learner, great communicator and problem-solver. I am adaptable, a team player and easy to deal with. I love to work with complex problems and translate them into simple, organized and elegant solutions. I strongly believe that humility is a key-factor to achieve anything, personally and as a team.</p>
                    <p className={style.Text__right}>Outside of work I love to play Basketball, to compete is inherent to our nature. I constantly play guitar, as a form of meditation and also to spend quality-time with my peers. Love to travel, and get in touch with other cultures, experimenting with new foods, languages and customs.</p>
                    <div className={style.Icons}>
                        <img className={style.Icon} src="src/assets/images/about/icons/ufmg.png" alt="" />
                        <img className={style.Icon} src="src/assets/images/about/icons/gent.png" alt="" />
                        <img className={style.Icon} src="src/assets/images/about/icons/nology.png" alt="" />
                    </div>
                </div>
                <img className={style.Profile} src="src/assets/images/about/profile-full.png" alt="" />
            </section>
            <section className={style.Head__white}>
                <div className={style.Text}>
                    <h1 className={style.Title2}> {""}</h1>
                    <p className={style.Text__left}>Born in Brazil and a Permanent Resident in Australia, I hold a bachelor degree in Mechanical Engineering from the Federal University of Minas Gerais, completed in 2016, and since then I have been accumulating experience in Industrial Manufacturing, Project Management and R&D.</p>
                    <p className={style.Text__right}>As a Software Engineer Trainee in _nology, I am pursuing my dream of working in Tech. Technology has always been Man's best friend throughout history, it is the present and it will be the future. It can improve quality of life and speed tasks that once took years to complete. As a society, we have reached the point where one can impact others lives across the globe, at the speed of light, and this excites me. I also believe that this great power is followed by the responsibility of building a better world for future generations, aiming for sustainability and equilibrium.</p>
                    <p className={style.Text__left}>You will see that I am a fast learner, great communicator and problem-solver. I am adaptable, a team player and easy to deal with. I love to work with complex problems and translate them into simple, organized and elegant solutions. I strongly believe that humility is a key-factor to achieve anything, personally and as a team.</p>
                    <p className={style.Text__right}>Outside of work I love to play Basketball, to compete is inherent to our nature. I constantly play guitar, as a form of meditation and also to spend quality-time with my peers. Love to travel, and get in touch with other cultures, experimenting with new foods, languages and customs.</p>
                    <div className={style.Icons}>
                        <img className={style.Icon} src="src/assets/images/about/icons/ufmg.png" alt="" />
                        <img className={style.Icon} src="src/assets/images/about/icons/gent.png" alt="" />
                        <img className={style.Icon} src="src/assets/images/about/icons/nology.png" alt="" />
                    </div>
                </div>
                <img className={style.Profile} src="src/assets/images/about/profile-full.png" alt="" />
            </section>
        </div>
    );
};

export default About;
