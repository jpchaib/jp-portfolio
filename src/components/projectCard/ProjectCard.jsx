import React from "react";
import style from "./ProjectCard.module.scss";

const ProjectCard = () => {
    const slides = [
        {
            name: "jp-portfolio",
            stacks: "JavaScript, HTML, SCSS, CSS, React, Vite",
            image: "src/assets/images/projects/jpportfolio.png",
            link: "",
            text: "My first, and still ongoing project, is this very protoflio. It was developed in a React framework and using Vite as a build tool. The main goal of this project is to showcase the projects developed during the _nology consultancy program, tell a bit about my self, my skills and provide contact means.",
        },
        {
            name: "MorseTranslator",
            stacks: "JavaScript, HTML, SCSS, CSS",
            image: "src/assets/images/projects/morsetranslator.png",
            link: "",
            text: "The Morse Translator app allows users to translate text into Morse code and vice versa. It has a simple and intuitive interface, with a text input field where users can enter either English text or Morse code, and a translate button that converts the text to the other format. The app is built using JavaScript, HTML, and CSS, and is responsive and mobile-friendly. Overall, the Morse Translator app is a useful tool for anyone interested in learning or using Morse code.",
        },
        {
            name: "GoogleBooksJP",
            stacks: "JavaScript, HTML, SCSS, CSS, React, Firestore",
            image: "src/assets/images/projects/googlebooksjp.png",
            link: "",
            text: "GoogleBooksJP is a web app that allows users to search for books using the Google Books API. It displays the search results in the form of cards, showing the book's title, author, and cover image. Users can also view more detailed information about a book by clicking on its card. In addition to displaying search results, GoogleBooksJP also includes a feature that allows users to create their own personal book library using Firestore. This allows them to save and organize their favorite books, and access them from any device. Overall, GoogleBooksJP is a convenient and user-friendly tool for finding and managing books.",
        },
        {
            name: "eCommerce",
            stacks: "JavaScript, HTML, SCSS, CSS, Firestore, Firebase Authentication, React, Vite",
            image: "src/assets/images/projects/ecommercejp.png",
            link: "",
            text: "One of the projects requested in the program was an e-commerce web page. The MVP of this project was to build a two-paged website that would contain a grid of products, also exposed by a carousel, stored in Firestore, containing some fields, such as price, quantities, name… . All data should`ve been stored in Firestore and fetched by the frontend, using a React application. While building my React application, I realised that, instead of creating a product, one by one, either manually or using a loop in my application as a seeder, I could, instead, use an existing API and fetch items to be used as my range of products. Then, I could use the Firestore as a database for user`s carts if I also implement an Authentication process. In the end, my project was selling pokemons, fetched from the PokeAPI, and stored in user`s carts. You can find it at my GitHub page.",
        },
        {
            name: "JpFakeOS",
            stacks: "JavaScript, HTML, SCSS, CSS",
            image: "src/assets/images/projects/jpfakeos.png",
            link: "",
            text: "The fake operating system app is a web-based app that imitates the look and feel of the popular Windows XP operating system. It includes a desktop with a Start menu, taskbar, and various desktop icons and widgets. Users can launch and interact with fake applications, such as a web browser, text editor, and media player. The app also includes a range of features that are inspired by Windows XP, such as a system tray, task manager, and control panel. The app was built using JavaScript, HTML, SCSS, and CSS, and is designed to be a fun and nostalgiciac tribute to the classic operating system.",
        },
        {
            name: "MinesweeperJP",
            stacks: "Java",
            image: "src/assets/images/projects/minesweeperjp.png",
            link: "",
            text: "The Minesweeper app is a classic puzzle game in which players uncover hidden mines on a grid of squares. The goal is to clear the grid without triggering any of the mines, by using logic to deduce the locations of the mines based on clues left behind. In this version of the game, players can choose from a range of difficulty levels by customizing the size of the boards and the quantity of mines present in the board. The app was created in Java and offers a clean and intuitive interface, with smooth gameplay and responsive controls. Overall, the Minesweeper app is a fun and challenging way to pass the time and exercise your problem-solving skills.",
        },
    ];

    return (
        <div>
            <div className={style.Main}></div>
        </div>
    );
};

export default ProjectCard;
