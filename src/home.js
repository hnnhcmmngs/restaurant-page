export default function loadHome() {
    const content = document.querySelector("#content");

    let intro = document.createElement("div");
    intro.textContent = "Welcome to Our Resutaurant. A new kind of restaurant.";
    intro.classList = "intro";

    content.appendChild(intro);
}