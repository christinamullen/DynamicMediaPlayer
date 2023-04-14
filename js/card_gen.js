
const cards =[
{
    title: "INGREDIENTS",
    icon: {
        src: "imgs/garlic_piece.svg",
        alt: "croissant",
    },
    description: {
        text: "<ol class='ingredients'><li>8 red bell peppers, seeds removed and blanched</li><li>1 cup pecorino cheese, shredded</li><li>1 cup arborio rice, cooked</li><li>1.5 lbs. pork shoulder, ground</li><li>32 oz. tomato sauce</li><li>1 Tbsp. marjoram</li><li>3-4 garlic cloves, minced</li><li>1 small sweet onion, minced</li><li>handful of parsley, chopped</li><li>salt, to taste</li><li>black pepper, to taste</li><li>olive oil, for frying</li></ol>",
    },
},
{
    title: "TIME TO COOK",
    icon: {
        src: "imgs/tomatoes.svg",
        alt: "Tomatoes",
    },
    description: {
        text: "<ol class='prepTime'><li>Prep Time: 15min</li> <li>Cook Time: 1 hr 30 mins</li> <li>Total Time: 1 hr 45mins</li> <li>Servings: 4</li></ol>", 
        
    },
},
];


const container = document.getElementById("bottom-cards");


cards.forEach((data) => {
    console.log(data.title);
    let card = document.createElement("DIV");
    card.classList.add("info-card");
    
    card.innerHTML += `<h3>${data.title}<h3>`;
    card.innerHTML += `<img src="${data.icon.src}" alt="${data.icon.alt}">`;
    card.innerHTML += `<p class="description">${data.description.text}</p>`;
    
    container.appendChild(card);
});

export { cards };
