import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Skills.module.scss";

const Skills = () => {
    const [clicked, setClicked] = useState(false);
    const [skill, setSkill] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [element, setElement] = useState(0);

    const imagesArr = [
        { skill: "html", path: "src/assets/images/icons8-html-5-96.png", link: "https://html.spec.whatwg.org/multipage/", description: "HTML is present in practicaly all my web projects. A sound knowledge of how Hypertext Markup Language works is fundamental for an application success. In my projects you will see the interaction between this language and JavaScript, CSS and other web development tools" },
        { skill: "css", path: "src/assets/images/icons8-css-96.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", description: "Cascading Style Sheets is another fundamental language used in pretty much all my projects. CSS allows me to style my webpages and is paramount for a friendly interface." },
        { skill: "sass", path: "src/assets/images/icons8-sass-96.png", link: "https://sass-lang.com/", description: "Stylesheets are getting larger and more complex in the world of web development. Sass is a great tool to maintain these files and it works perfectly together with other tools. I`ve used this CSS extension in all web projects." },
        { skill: "javascript", path: "src/assets/images/icons8-javascript-96.png", link: "https://www.javascript.com/", description: "JavaScript is the main tool used in my projects. Sometimes used in TypeScript, it allowed me to add dynamic features, such as the appearance of this very box after clicking in the JS logo." },
        { skill: "react", path: "src/assets/images/icons8-react-96.png", link: "https://reactjs.org/", description: "I`ve built this very portfolio using the React Library. This tools allowed me to re-use components, add routes and contexts in a much simpler fashion. Understanding Hooks and the Virtal DOM is paramount and helped me to deliver a better product in the end." },
        { skill: "java", path: "src/assets/images/icons8-java-96.png", link: "https://www.java.com/en/", description: "JAVA has been my friend language since I first started learning about Groovy to automate stock market trades together with a friend. The extensive library and its typing constraints makes it perfect for value-sensible transactions. The Minesweeper project was impl;emented in JAVA, using eclipse and the .awt library to build an awesome user interface." },
        { skill: "spring", path: "src/assets/images/icons8-spring-logo-96.png", link: "https://spring.io/", description: "Spring is an application framework for the Java platform. I`ve used Spring to build my first API using its microservice and buuilding the end-points necessary for my HTTP requests." },
        { skill: "typescript", path: "src/assets/images/icons8-typescript-96.png", link: "https://www.typescriptlang.org/", description: "Once I had learn JavaScript and JAVA, TypeScript came naturally to me. I've used this tool in my first Client Project to increase safety and supply a more robust product, introducing typing to JS." },
        { skill: "firebase", path: "src/assets/images/icons8-firebase-96.png", link: "https://firebase.google.com/", description: "Firebase has been a partner in my career so far. I've used its Firestore as a Database and its Authentication to create users on my eCommerce Project which can be found in my GitHub profile." },
        { skill: "nestjs", path: "src/assets/images/icons8-nestjs-96.png", link: "https://nestjs.com/", description: "After getting familiar with APIs, NestJS fits like a glove in a React Application. Using Vite to set up my application and NestJs to manage all end-points requests, e2e tests, Guards and custom decorators, I was able to understand what a full stack we developer really is." },
        { skill: "mysql", path: "src/assets/images/icons8-mysql-logo-96.png", link: "https://www.mysql.com/", description: "A great tool to directly manage my Database and make my queries, MySql stores important data for my projects in high performance. " },
        { skill: "github", path: "src/assets/images/icons8-github-96.png", link: "https://github.com/", description: "GitHub is my everyday companion. All collaboration work that I`ve done so far was done inside of this great platform. It makes it easy to understand repositories, branch management, information flow and all pull requests. " },
    ];

    useEffect(() => {
        setClicked(false);
    }, []);

    const handleClick = (event) => {
        setElement(parseInt(event.target.attributes.name.value));
        setClicked(true);
    };

    return (
        <div className={style.Page}>
            <div className={style.Container}>
                <h3>Tools</h3>
                <div className={style.SkillBox}>
                    <img name="0" onClick={handleClick} className={style.Image} src={imagesArr[0].path} alt={imagesArr[0].skill} />
                    <img name="1" onClick={handleClick} className={style.Image} src={imagesArr[1].path} alt={imagesArr[1].skill} />
                    <img name="2" onClick={handleClick} className={style.Image} src={imagesArr[2].path} alt={imagesArr[2].skill} />
                    <img name="3" onClick={handleClick} className={style.Image} src={imagesArr[3].path} alt={imagesArr[3].skill} />
                    <img name="4" onClick={handleClick} className={style.Image} src={imagesArr[4].path} alt={imagesArr[4].skill} />
                    <img name="5" onClick={handleClick} className={style.Image} src={imagesArr[5].path} alt={imagesArr[5].skill} />
                    <img name="6" onClick={handleClick} className={style.Image} src={imagesArr[6].path} alt={imagesArr[6].skill} />
                    <img name="7" onClick={handleClick} className={style.Image} src={imagesArr[7].path} alt={imagesArr[7].skill} />
                    <img name="8" onClick={handleClick} className={style.Image} src={imagesArr[8].path} alt={imagesArr[8].skill} />
                    <img name="9" onClick={handleClick} className={style.Image} src={imagesArr[9].path} alt={imagesArr[9].skill} />
                    <img name="10" onClick={handleClick} className={style.Image} src={imagesArr[10].path} alt={imagesArr[10].skill} />
                    <img name="11" onClick={handleClick} className={style.Image} src={imagesArr[11].path} alt={imagesArr[11].skill} />
                </div>
            </div>
            {clicked && (
                <div className={style.Description}>
                    <div className={style.Title}>
                        <a target={"_blank"} className={style.Link} href={imagesArr[element].link}>
                            <img className={style.ImageBox} src={imagesArr[element].path} alt={imagesArr[element].skill} />
                        </a>
                        <h1>{imagesArr[element].skill.toUpperCase()}</h1>
                    </div>
                    <h2 className={style.Text}>{imagesArr[element].description}</h2>
                </div>
            )}

            {!clicked && (
                <div className={style.Chatbox}>
                    <div className={style.csstyping}>
                        <p>
                            Click in any icon in the <b>left</b>.
                        </p>
                    </div>
                </div>
            )}
            <img className={style.Face} src="src/assets/images/avatar.png" alt="" />
        </div>
    );
};

export default Skills;
