export default function loadMenu() {
    const content = document.querySelector("#content");

    let h = document.createElement("div");
    let title = document.createElement("div");
    title.textContent = "Fixed Menu";
    let price = document.createElement("div");
    price.textContent = "$44.99 per person";
    let addendum = document.createElement("div");
    addendum.textContent = "Bread, water, and glass of wine or beer included";

    h.appendChild(title);
    h.appendChild(price);
    h.appendChild(addendum);

    let menuItems = [
        {
            type: "Starter",
            name: "Grilled Eggplant Salad",
            description: "goat cheese, baby arugula, tomato, balsamic"
        }, 
        {
            type: "Entree",
            name: "Crispy Pork Belly",
            description: "caramelized onions, apple compote, arugula salad, maple-pork jus"
        },
        {
            type: "Dessert",
            name: "Chocolate Mousse",
            description: "raspberry coulis, caramel sauce"
        }
    ];

    let menu = document.createElement("div");

    for (let item of menuItems) {
        let course = document.createElement("div");
        let t = document.createElement("div");
        t.textContent = item.type;
        let n = document.createElement("div");
        n.textContent = item.name;
        let d = document.createElement("div");
        d.textContent = item.description;
        course.appendChild(t);
        course.appendChild(n);
        course.appendChild(d);
        menu.appendChild(course);
    }
    content.appendChild(h);
    content.appendChild(menu);
}