import React from "react";
import style from "./About.module.scss";
const About = () => {
    const images = ["photoFromInternet", "photoFromInternet2", "photoFromInternet3"];
    const link = (
        <a target={"_blank"} href="https://joaopedrochaib.wixsite.com/website">
            paper publications
        </a>
    );

    return (
        <div className={style.About}>
            <section className={style.Head}>
                <div className={style.Text}>
                    <h1 className={style.Title}> {"<Jp/>"}</h1>
                    <p className={style.Text}>Born in Brazil and a Permanent Resident in Australia, I hold a bachelor degree in Mechanical Engineering from the Federal University of Minas Gerais, completed in 2016, and since then I have been accumulating experience in Industrial Manufacturing, Project Management and R&D. As a Software Engineer Trainee in _nology, I am pursuing my dream of working in Tech. Technology has always been Man's best friend throughout history, it is the present and it will be the future. As a society, we have reached the point where one can impact others lives across the globe, at the speed of light, and this excites me. I also believe that this great power is followed by the responsibility of building a better world for future generations, aiming for sustainability and equilibrium. </p>
                    <p className={style.Text}>You will see that I am a fast learner, great communicator and problem-solver. I am adaptable, a team player and easy to deal with. I love to work with complex problems and translate them into simple, organized and elegant solutions. I strongly believe that humility is a key-factor to achieve anything, personally and as a team. Outside of work I love to play Basketball, to compete is inherent to our nature. I constantly play guitar, as a form of meditation and also to spend quality-time with my peers. Love to travel, and get in touch with other cultures, experimenting with new foods, languages and customs.</p>
                    <div className={style.Icons}>
                        <a target={"_blank"} href="https://ufmg.br/">
                            <img className={style.Icon} src="src/assets/images/about/icons/ufmg.png" alt="" />
                        </a>
                        <a target={"_blank"} href="https://www.ugent.be/en">
                            <img className={style.Icon} src="src/assets/images/about/icons/gent.png" alt="" />
                        </a>
                        <a target={"_blank"} href="https://au.nology.io/">
                            <img className={style.Icon} src="src/assets/images/about/icons/nology.png" alt="" />
                        </a>
                    </div>
                </div>
                <img className={style.Profile} src="src/assets/images/about/profile-full.png" alt="" />
            </section>
            <section className={style.Head__white__right}>
                <div className={style.Text}>
                    <h1 className={style.Title__white}> {"<Exp/>"}</h1>
                    <p className={style.Text}>My career, so far, has been giving me the skill set required for working in the exciting tech industry. Since my university days, I was touching bases with all kind of softwares, CAE (Computational Aid Engineering) softwares, from 2D/3D drawing applications, through numerical simulation routines and multiphysic models.</p>
                    <p className={style.Text}>
                        By applying the real-world law into human-made models to improve product performance and create industrial know-how, I have also learned how to work within an organization, and in different teams, focused on the big picture, or a mission. The majority of my <b className={style.Link}>{link}</b> are products of these collaborations.
                    </p>
                    <p className={style.Text}>With almost a decade of experience with Project Management, dealing wih stake holders, automating processes and reaching to milestones in due time, the continuous improvement routine is now inherent to my professional MO. This special set of skills provide me with the right amount of confidence to accept all challenges thrown at my direction.</p>
                    <p className={style.Text}>Now, after completing the _nology Accelerator Program, I feel even more prepared to work within the tech industry. Check my stack-skill and project sections to see what I've accomplished so far.</p>
                </div>
                <img className={style.Image} src="src/assets/images/about/experience.png" alt="" />
            </section>
            <section className={style.Head}>
                <div className={style.Text}>
                    <h1 className={style.Title}> {"<Occupaction Dev/>"}</h1>
                    <p className={style.Text__left}>Born in Brazil and a Permanent Resident in Australia, I hold a bachelor degree in Mechanical Engineering from the Federal University of Minas Gerais, completed in 2016, and since then I have been accumulating experience in Industrial Manufacturing, Project Management and R&D. As a Software Engineer Trainee in _nology, I am pursuing my dream of working in Tech. Technology has always been Man's best friend throughout history, it is the present and it will be the future. As a society, we have reached the point where one can impact others lives across the globe, at the speed of light, and this excites me. I also believe that this great power is followed by the responsibility of building a better world for future generations, aiming for sustainability and equilibrium. </p>
                    <p className={style.Text__left}>You will see that I am a fast learner, great communicator and problem-solver. I am adaptable, a team player and easy to deal with. I love to work with complex problems and translate them into simple, organized and elegant solutions. I strongly believe that humility is a key-factor to achieve anything, personally and as a team. Outside of work I love to play Basketball, to compete is inherent to our nature. I constantly play guitar, as a form of meditation and also to spend quality-time with my peers. Love to travel, and get in touch with other cultures, experimenting with new foods, languages and customs.</p>
                </div>
                <img className={style.Profile} src="src/assets/images/about/dilbert.png" alt="" />
            </section>
        </div>
    );
};

export default About;
