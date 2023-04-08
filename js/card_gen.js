const cards =[
{
    title: "Ingredients",
    icon: {
        src: "",
        alt: "",
    },
    desription: {
        text: "4 Bell Peppers\n 1 lb ground beef \n 1 cup cooked rice",
    },
},
{
    title: "Time to Cook",
    icon: {
        src:"",
        alt:"",
    },
    desription: {
        text: "Prep Time: 15min\n Cook Time: 1 hr 30 mins\n Total Time: 1 hr 45mins\n Servings: 4"
    },
},
];

const container = document.getElementById("bottom-cards");
const template_card = document.getElementsByClassName("info-card")[0];

cards.forEach((data) => {
    const card = template_card.cloneNode(true);
    card.style.display = "";
    const header = card.children[0];
    const image = card.children[1];
    const description = card.children[2];
    header.textContent = data.title;
    image.src = data.icon.src;
    image.alt = data.icon.alt;
    description.textContent = data.description.text;
    container.appendChild(card);
});