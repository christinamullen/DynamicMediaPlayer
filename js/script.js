import { cueTimer } from './modules/cues.js';
//import {cards} from './card_gen.js';

document.addEventListener("DOMContentLoaded", init)
var myCues;
const recipeList = document.getElementById("recipe-list");
const recipeListItems = recipeList.getElementsByTagName("li");

//const ingredientList = document.getElementsByClassName("ingredients");
const ingrListItems = document.getElementsByTagName("li");

function init() {

   myCues = [
        { seconds: 0, callback: func1 },//recipe list 0
        { seconds: 6, callback: func2 },//ingred list 0,
        { seconds: 7, callback: func3 },//ingred list 0,
        { seconds: 14, callback: func4 },
        { seconds: 18, callback: func5 },
        { seconds: 23, callback: func6 },
        { seconds: 28, callback: func7 },
        { seconds: 30, callback: func8 },
        { seconds: 33, callback: func9 },
        { seconds: 36, callback: funcA },
        { seconds: 38, callback: funcB },

        { seconds: 40, callback: funcC },
        { seconds: 65, callback: funcD },
        { seconds: 133, callback: funcE },
        { seconds: 249, callback: funcF },//sauce in pan
        { seconds: 262, callback: funcG },
        { seconds: 290, callback: funcH },
        { seconds: 309, callback: funcI },
        { seconds: 324, callback: funcJ },
        { seconds: 344, callback: funcK }
    ];
    //cuepoint timer
    cueTimer.setup("vid", myCues);
}

function func1() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>First, set the oven temp and gathering your ingredients</p>";
    document.querySelector(".pop").classList.toggle("hide");
    recipeListItems[0].classList.add("highlight");
    setTimeout(() => {
        recipeListItems[0].classList.remove("highlight");
    }, 41000);
    
}

function func2() {
    
    recipeListItems[1].classList.add("highlight");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
        recipeListItems[1].classList.remove("highlight");
    }, 5000);
}

function func3() {
    //show peppers
    //highlight instructions #2 decided this looked weird
    /*convert text string into DOM element
    const range = document.createRange();
    const htmlFragment = range.createContextualFragment(cards[0].description.text);
    let aListItem = htmlFragment.querySelectorAll('ol li')[0].textContent;
    console.log(aListItem);
    let pop = document.querySelector(".pop");
    pop.innerHTML = aListItem;*/
    ingrListItems[0].classList.add("highlight");
    recipeListItems[2].classList.add("highlight");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
        ingrListItems[0].classList.remove("highlight");
        recipeListItems[2].classList.remove("highlight");
    }, 7000);
    
}
//cheese
function func4() {
    ingrListItems[1].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[1].classList.remove("highlight");
    }, 3000);
}
//rice
function func5() {
    ingrListItems[2].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[2].classList.remove("highlight");
    }, 4000);
}
//pork
function func6() {
    ingrListItems[3].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[3].classList.remove("highlight");
    }, 5000);
}
//sauce
function func7() {
    ingrListItems[4].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[4].classList.remove("highlight");
    }, 1000);
}
//marj
function func8() {
    ingrListItems[5].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[5].classList.remove("highlight");
    }, 2000);
}
//garlic
function func9() {
    ingrListItems[6].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[6].classList.remove("highlight");
    }, 2000);
}
//onion
function funcA() {
    ingrListItems[7].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[7].classList.remove("highlight");
    }, 1000);
}
//parsley
function funcB() {
    ingrListItems[8].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[8].classList.remove("highlight");
    }, 2000);
}
//
function funcC() {
    ingrListItems[11].classList.add("highlight");
    ingrListItems[6].classList.add("highlight");
    ingrListItems[7].classList.add("highlight");
    recipeListItems[3].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[11].classList.remove("highlight");
        recipeListItems[3].classList.remove("highlight");
    }, 17000);
}

function funcD() {
    ingrListItems[11].classList.add("highlight");
    ingrListItems[6].classList.add("highlight");
    ingrListItems[7].classList.add("highlight");
    ingrListItems[3].classList.add("highlight");
    ingrListItems[1].classList.add("highlight");
    ingrListItems[5].classList.add("highlight");
    ingrListItems[8].classList.add("highlight");
    ingrListItems[9].classList.add("highlight");
    ingrListItems[10].classList.add("highlight");
    recipeListItems[4].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[11].classList.remove("highlight");
        recipeListItems[4].classList.remove("highlight");
    }, 62000);
}
function funcE() {
    ingrListItems[11].classList.add("highlight");
    ingrListItems[6].classList.add("highlight");
    ingrListItems[7].classList.add("highlight");
    ingrListItems[3].classList.add("highlight");
    ingrListItems[2].classList.add("highlight");
    ingrListItems[1].classList.add("highlight");
    ingrListItems[4].classList.add("highlight");
    ingrListItems[5].classList.add("highlight");
    ingrListItems[8].classList.add("highlight");
    ingrListItems[9].classList.add("highlight");
    ingrListItems[10].classList.add("highlight");
    recipeListItems[5].classList.add("highlight");
    setTimeout(() => {
        recipeListItems[5].classList.remove("highlight");
        ingrListItems[11].classList.remove("highlight");
        ingrListItems[10].classList.remove("highlight");
        ingrListItems[9].classList.remove("highlight");
        ingrListItems[8].classList.remove("highlight");
        ingrListItems[7].classList.remove("highlight");
        ingrListItems[6].classList.remove("highlight");
        ingrListItems[5].classList.remove("highlight");
        ingrListItems[3].classList.remove("highlight");
        ingrListItems[2].classList.remove("highlight");
        ingrListItems[1].classList.remove("highlight");
    }, 116000);
}
//sauce
function funcF() {
    ingrListItems[4].classList.add("highlight");
    recipeListItems[6].classList.add("highlight");
    setTimeout(() => {
        recipeListItems[6].classList.remove("highlight");
    }, 22000);
}
function funcG() {
    //peppers
    ingrListItems[0].classList.add("highlight");

}
function funcH() {
    //peppers
    ingrListItems[0].classList.add("highlight");
    ingrListItems[1].classList.add("highlight");
    ingrListItems[2].classList.add("highlight");
    ingrListItems[3].classList.add("highlight");
    ingrListItems[4].classList.add("highlight");
    ingrListItems[5].classList.add("highlight");
    ingrListItems[6].classList.add("highlight");
    ingrListItems[7].classList.add("highlight");
    ingrListItems[8].classList.add("highlight");
    ingrListItems[9].classList.add("highlight");
    ingrListItems[10].classList.add("highlight");
    recipeListItems[7].classList.add("highlight");
    setTimeout(() => {
        recipeListItems[7].classList.remove("highlight");
    }, 22000);

}
function funcI() {
    recipeListItems[8].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[11].classList.remove("highlight");
        recipeListItems[8].classList.remove("highlight");
    }, 17000);
}
function funcJ() {
    recipeListItems[9].classList.add("highlight");
    setTimeout(() => {
        recipeListItems[9].classList.remove("highlight");
    }, 20000);
}
function funcK() {
    recipeListItems[10].classList.add("highlight");
    ingrListItems[4].classList.add("highlight");
}
