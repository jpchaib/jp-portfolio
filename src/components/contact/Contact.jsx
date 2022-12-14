import React from "react";
import { useState, useEffect } from "react";
import style from "./Contact.module.scss";

const Contact = () => {
    const [contactArray, setContactArray] = useState([]);

    useEffect(() => {
        setContactArray([
            { name: "LinkedIn", imagePath: "src/assets/images/contact/linkedin.png", link: "https://www.linkedin.com/in/joao-pedro-chaib-de-toledo-alves-pinto-39839915a/", profile: "Joao Pedro Chaib" },
            { name: "Gmail", imagePath: "src/assets/images/contact/gmail.png", link: "https://mail.google.com/", profile: "joaopedrochaib@gmail.com" },
            { name: "GitHub", imagePath: "src/assets/images/contact/github.png", link: "https://github.com/jpchaib", profile: "jpchaib" },
        ]);
    }, []);

    return (
        <div>
            <div className={style.Container}>
                {contactArray.map((contact, key) => {
                    return (
                        <div>
                            <a key={key} target={"_blank"} className={style.Link} href={contactArray[key].link}>
                                <img className={style.Image} src={contactArray[key].imagePath} alt={contactArray[key].name} />
                            </a>
                            <div className={style.Copy}>
                                <h4>{contactArray[key].profile}</h4>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(contactArray[key].profile);
                                    }}
                                >
                                    <img className={style.CopyImage} src={"src/assets/images/contact/copy.png"} alt="copy" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={style.Foot}>
                <p>This website was designed by Joao Pedro Chaib in December 2022</p>
            </div>
        </div>
    );
};

export default Contact;
