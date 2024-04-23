import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
import './style.css';

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadAbout();
});

loadHome();