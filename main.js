const btnLoader = document.getElementById ("loader");

const btnSaha = document.getElementById ("saha");
const btnGasprom = document.getElementById ("gasprom");
const btnNokia = document.getElementById ("nokia");

const cards = document.getElementById ("cards");

let popupSaha = document.getElementById ('popup_saha');
let popupGasprom = document.getElementById ('popup_gasprom');
let popupNokia = document.getElementById ('popup_nokia');

let clossPopup = document.getElementById ('clossed');

// добавление по кнопке "загрузить еще"

function loaderMore () {
    cards.insertAdjacentHTML ("afterEnd", `<div id="cards" class='wrapper_cards'>
    <div id="card" class="card_one">
        <img src="./img/rb_saha.jpg" alt="saha">
        <h3 onclick="getSaha () id="saha" class="title_saha">РУСПУБЛИКА САХА</h3>
    </div>
    <div class="card_two">
        <img src="./img/gasprom.jpg" alt="gasprom">
        <h3 onclick="getGasprom () id="gasprom" class="title_gasprom">ГАЗПРОМ</h3>
    </div>
    <div class="card_three">
        <img src="./img/nokia.jpg" alt="nokia">
        <h3 onclick="getNokia ()" id="nokia" class="title_nokia">NOKIA</h3>
    </div>
</div>`)
};

// Popup


function getSaha () {
    btnSaha.addEventListener ('click', () => 
    popupSaha.classList.add('modal_active'))
};


function getGasprom () {
    btnGasprom.addEventListener ('click', () => 
    popupGasprom.classList.add('modal_active'))
};

function getNokia () {
    btnNokia.addEventListener ('click', () => 
    popupNokia.classList.add('modal_active'))
};


function closed_popup () {
    popupSaha.classList.remove('modal_active');
    popupGasprom.classList.remove('modal_active');
    popupNokia.classList.remove('modal_active');
};