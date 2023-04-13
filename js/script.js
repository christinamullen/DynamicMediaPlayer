import { cueTimer } from "./modules/cues.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

   myCues = [
        { seconds: 5, callback: func1 },
        { seconds: 10, callback: func2 },
        { seconds: 20, callback: func3 },
        { seconds: 30, callback: func6 },
        { seconds: 40, callback: func4 },
        { seconds: 50, callback: func5 }
    ];

    //cuepoint timer
    cueTimer.setup("vid", myCues);

    //shortcut variables
    const vid = document.querySelector("#vid");
    const selectTxt = document.querySelector("#text-track");
    
    const showHide = document.getElementById("show-hide");

    const recipeList = document.getElementById("recipe-list");
    const recipeListItems = recipeList.getElementsByTagName("li");

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
    });

    //not using ************************
    // initialize video captions dropdown behavior
    selectTxt.addEventListener("change", (e) => {
        const id = e.target.value;
        selectTrack(e, vid, id);
    });

}
//test 
function func1() {
    document.querySelector("#vid").style = "outline : 10px solid red";
}

function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Ohh Snap!</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func3() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>E=MC<sup>2</sup> is NOT Statistical Data!!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#vid").style = "outline: 0px solid red";
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Albert_Einstein";
}

function func4() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Paradigm_shift";
}

function func5() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Domestic_violence";
}

function func6() {
    document.querySelector("#web").src = "images/koljr-banana-splits-400.jpg";
}
