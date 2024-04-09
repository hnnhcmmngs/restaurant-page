export default function loadHome() {
    const content = document.querySelector("#content");

    let intro = document.createElement("div");
    intro.textContent = "Welcome to Our Resutaurant. A new kind of restaurant.";
    intro.classList = "intro";
    
    let open = document.createElement("div");
    open.classList = "hours";
    let hours = document.createElement("div");
    hours.textContent = "Hours"
    let weekday = document.createElement("div");
    weekday.textContent = "Monday - Friday: 1200 to 1500, 1900 to 2200";
    let weekends = document.createElement("div");
    weekends.textContent = "Saturday & Sunday: 1100 to 1500, 1800 to 2300";
    open.appendChild(hours);
    open.appendChild(weekday);
    open.appendChild(weekends);

    content.appendChild(intro);
    content.appendChild(open);
}