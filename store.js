// THIS IS A COMMENT

const saxy = new Audio("./sax.mp3");
const shopMusic = new Audio("./shopP5S.mp3");

function tooSexyToHandle (){
    saxy.play();
    const grabbingVar = document.getElementById("ohYeah");
    grabbingVar.style.fontStyle = "italic";
    grabbingVar.style.color = "red";
    const gotVar = document.getElementById("storeIntro");
    gotVar.style.borderColor = "hotpink";
    animeGREG();
}

function storeIsOpen (){
    shopMusic.play();
    const box = document.getElementById('hideBox');
    box.style.visibility = "visible";
}

function nullMusic(){
    shopMusic.pause();
    const benNo = new Audio();
    benNo.src =  "./talking-ben-sound.mp3";
    benNo.play();
    alert("That Beat Went TOO HARD!!!");
}

function animeGREG (){
    
setTimeout(showPopup, 1_000);
setTimeout(showPopup, 9_000);

let popup; // global variable for state management
function showPopup() { // call twice to remove popup
    // if the popup already exists, remove it
    if (popup) {
        popup.parentNode.removeChild(popup);
        popup = undefined;
        return;
    }

    // create image popup
    popup = document.createElement("img");
    popup.src = "weebGreg.jpg";
    var boom = new Audio('VineBoom.mp3');
    boom.play();
    Object.assign(popup.style, {
        zIndex: 10000,
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "170vh",
        transform: "translate(-50%,-50%)",

    });

    document.body.appendChild(popup);
}
}