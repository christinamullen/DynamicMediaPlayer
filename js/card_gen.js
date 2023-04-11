const cards =[
{
    title: "Ingredients",
    icon: {
        src: "imgs/fork_icon.png",
        alt: "croissant",
    },
    description: {
        text: "4 Bell Peppers\n 1 lb ground beef \n 1 cup cooked rice",
    },
},
{
    title: "Time to Cook",
    icon: {
        src: "imgs/timer.png",
        alt: "pepe",
    },
    description: {
        text: "Prep Time: 15min\n Cook Time: 1 hr 30 mins\n Total Time: 1 hr 45mins\n Servings: 4"
    },
},
];

const container = document.getElementById("bottom-cards");
//const template_card = document.getElementsByClassName("info-card")[0];

cards.forEach((data) => {
    console.log(data.title);
    let card = document.createElement("DIV");
    card.classList.add("info-card");
    
    card.innerHTML += `<h2>${data.title}<h2>`;
    card.innerHTML += `<img src="${data.icon.src}" alt="${data.icon.alt}">`;
    card.innerHTML += `<p>${data.description.text}</p>`;
    
    container.appendChild(card);
});