import loadHome from "./home";
import loadMenu from "./menu";
const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
})

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
});

loadHome();