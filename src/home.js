export default function loadHome() {
    const content = document.querySelector("#content");

    let intro = document.createElement("div");
    let line1 = document.createElement("p");
    line1.innerHTML = "Welcome to <em>Our Restaurant</em>.";
    line1.setAttribute("id", "line1");
    let line2 = document.createElement("p");
    line2.textContent = "A new kind of restaurant.";
    line2.setAttribute("id", "line2");
    intro.classList = "intro";
    intro.appendChild(line1);
    intro.appendChild(line2);

    content.appendChild(intro);
}