export default function loadAbout() {
    const content = document.querySelector("#content");

    let aboutInfo = document.createElement("div");
    let about = document.createElement("div");
    about.textContent = "About Us";
    let desc = document.createElement("div");
    desc.textContent = "At Restaurant Group, we are passionate about lorem ipsum dolor sit amet consectetur, adipisicing elit. At porro, voluptates eveniet asperiores, dolore unde velit deserunt eum quo debitis cumque molestias in blanditiis vitae expedita dolores ratione aliquid consectetur."
    aboutInfo.appendChild(about);
    aboutInfo.appendChild(desc);

    let open = document.createElement("div");
    let hours = document.createElement("div");
    hours.textContent = "Hours"
    let weekday = document.createElement("div");
    weekday.textContent = "Monday - Friday: 1200 to 1500, 1900 to 2200";
    let weekends = document.createElement("div");
    weekends.textContent = "Saturday & Sunday: 1100 to 1500, 1800 to 2300";
    open.appendChild(hours);
    open.appendChild(weekday);
    open.appendChild(weekends);

    let contactInfo = document.createElement("div");
    let contact = document.createElement("div");
    contact.textContent = "Contact Us";
    let number = document.createElement("div");
    number.textContent = "+1 (555) 235-4444";
    let address = document.createElement("div");
    address.textContent = "123 Alphabet St, Nowhere, HA 23432";
    contactInfo.appendChild(contact);
    contactInfo.appendChild(number);
    contactInfo.appendChild(address);

    content.appendChild(aboutInfo);
    content.appendChild(open);
    content.appendChild(contactInfo);
}