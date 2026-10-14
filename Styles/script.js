const hairstyles = [

    {
        name: "",
        image: "Pic.png"
    },
    {
        name: "",
        image: "Pic2.png"
    },
    {
        name: "",
        image: "Pic3.png"
    },
    {
        name: "",
        image: "Pic4.png"
    },
    {
        name: "",
        image: "Pic5.png"
    },
    {
        name: "",
        image: "Pic6.png"
    },
    {
        name: "",
        image: "Pic7.png"
    },
    {
        name: "",
        image: "Pic8.png"
    },
    {
        name: "",
        image: "Pic9.png"
    },
    {
        name: "",
        image: "Pic10.png"
    },
    {
        name: "",
        image: "Pic11.png"
    },
    {
        name: "",
        image: "Pic12.png"
    },
    {
        name: "",
        image: "Pic13.png"
    },
    {
        name: "",
        image: "Pic14.png"
    },
    {
        name: "",
        image: "Pic15.png"
    },
    {
        name: "",
        image: "Pic16.jpg"
    },
    {
        name: "",
        image: "Pic17.png"
    },
    {
        name: "",
        image: "Pic18.png"
    },
    {
        name: "",
        image: "Pic19.png"
    },
    {
        name: "",
        image: "Pic20.png"
    },
    {
        name: "",
        image: "Pic21.png"
    },
    {
        name: "",
        image: "Pic22.png"
    },
    {
        name: "",
        image: "Pic23.png"
    },
    {
        name: "",
        image: "Pic24.png"
    },
    {
        name: "",
        image: "Pic25.png"
    },
    {
        name: "",
        image: "Pic26.png"
    },
    {
        name: "",
        image: "Pic27.png"
    },
    {
        name: "",
        image: "Pic28.png"
    },
    {
        name: "",
        image: "Pic29.png"
    },
    {
        name: "",
        image: "Pic30.png"
    },
    {
        name: "",
        image: "Pic31.png"
    },
    {
        name: "",
        image: "Pic32.png"
    },
    {
        name: "",
        image: "Pic33.png"
    },
    {
        name: "",
        image: "Pic34.png"
    },
    {
        name: "",
        image: "Pic35.png"
    },
    {
        name: "",
        image: "Pic36.png"
    },
    {
        name: "",
        image: "Pic37.png"
    },
    {
        name: "",
        image: "Pic38.png"
    },
    {
        name: "",
        image: "Pic39.png"
    },
];


// Find the container in Hairstyles.html
const container = document.getElementById("hairstyleContainer");


// Create a card for every hairstyle
hairstyles.forEach(style => {

    const card = document.createElement("div");
    card.classList.add("hairstyle-card");

    card.innerHTML = `
        <img src="${style.image}" alt="${style.name}" loading="lazy">
        <h2>${style.name}</h2>
    `;

    container.appendChild(card);

});