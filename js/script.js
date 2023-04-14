import { cueTimer } from "./modules/cues.js";
import { cards } from "./card_gen.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
const recipeList = document.getElementById("recipe-list");
const recipeListItems = recipeList.getElementsByTagName("li");

const ingredientList = document.getElementsByClassName("ingredients");
const ingrListItems = document.getElementsByTagName("li");

function init() {

   myCues = [
        { seconds: 1, callback: func1 },
        { seconds: 2, callback: func2 },
        { seconds: 5, callback: func3 },
        { seconds: 6, callback: func4 },
        { seconds: 40, callback: func4 },
        { seconds: 50, callback: func5 }
    ];
    //cuepoint timer
    cueTimer.setup("vid", myCues);

    //shortcut variables
    const vid = document.querySelector("#vid");
    const selectTxt = document.querySelector("#text-track");
    const showHide = document.getElementById("show-hide");

/*
    vid.addEventListener("timeupdate", function() {
        for (let i = 0; i < recipeListItems.length; i++){
            const start = parseFloat(recipeListItems[i].dataset.start);
            const end = parseFloat(recipeListItems[i].dataset.end);
            if(vid.currentTime >= start && vid.currentTime < end ){
                recipeListItems.classList.add("highlight");
            }
            else{
                recipeListItems.classList.remove("highlight");
            }
        }
    });*/
}
//test 
function func1() {
    document.querySelector("#vid").style = "outline : 10px solid red";
    
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Gather Ingredient:</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 1000);
}

function func3() {
    //show peppers
    //highlight instructions #2
    //convert text string into DOM element
    const range = document.createRange();
    const htmlFragment = range.createContextualFragment(cards[0].description.text);
    let aListItem = htmlFragment.querySelectorAll('ol li')[0].textContent;
    console.log(aListItem);
    let pop = document.querySelector(".pop");
    pop.innerHTML = aListItem;
    ingrListItems[0].classList.add("highlight");
    recipeListItems[1].classList.add("highlight");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
        ingrListItems[0].classList.remove("highlight");
    }, 5000);
    
}

function func4() {
    ingrListItems[1].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[1].classList.remove("highlight");
    }, 5000);
}

function func5() {
    ingrListItems[2].classList.add("highlight");
    setTimeout(() => {
        ingrListItems[2].classList.remove("highlight");
    }, 5000);
}

function func6() {
}
