const sidebar = document.querySelector(".sidebar");
const top_dishes_section = document.getElementById("top_menu");
const assorted = document.querySelector(".assorted");
const assorted_menu = document.getElementById("assorted_menu");
const rolls_menu = document.getElementById("rolls_menu");
const rolls = document.querySelector(".rolls");
const pizza_menu = document.getElementById("pizza_menu");
const pizza = document.querySelector(".pizza");
const cake_menu = document.getElementById("cake_menu");
const cake = document.querySelector(".cake");
const pasta_menu = document.getElementById("pasta_menu");
const pasta = document.querySelector(".pasta");
const sandwich_menu = document.getElementById("sandwich_menu");
const sandwich = document.querySelector(".sandwich");
const noodles_menu = document.getElementById("noodles_menu");
const noodles = document.querySelector(".noodles");
const salad_menu = document.getElementById("salad_menu");
const salad = document.querySelector(".salad");
//const dish_img = document.querySelectorAll(".dish-img");



/*dish_img.forEach((dish)=>{
    dish.addEventListener("click", ()=>{
        dish.classList.add("clicked");
    })
})*/

function showSidebar(){
    sidebar.style.display = "flex";
}

function hideSidebar(){
    sidebar.style.display = "none";
}

function showAssorted_Dishes(){
    assorted_menu.style.display = "block";
    assorted.style.display = "grid";
    top_dishes_section.style.display = "none";
    rolls_menu.style.display = "none";
    pizza_menu.style.display = "none";
    cake_menu.style.display = "none";
    pasta_menu.style.display = "none";
    sandwich_menu.style.display = "none";
    noodles_menu.style.display = "none";
    salad_menu.style.display = "none";
}
function showRolls(){
    top_dishes_section.style.display = "none";
    assorted_menu.style.display = "none";
    rolls_menu.style.display = "block";
    rolls.style.display = "grid";
    pizza_menu.style.display = "none";
    cake_menu.style.display = "none";
    pasta_menu.style.display = "none";
    sandwich_menu.style.display = "none";
    noodles_menu.style.display = "none";
    salad_menu.style.display = "none";    
}
function showPizza(){
    top_dishes_section.style.display = "none";
    assorted_menu.style.display = "none";
    rolls_menu.style.display = "none";
    pizza_menu.style.display = "block";
    pizza.style.display = "grid";
    cake_menu.style.display = "none";
    pasta_menu.style.display = "none";
    sandwich_menu.style.display = "none";
    noodles_menu.style.display = "none";
    salad_menu.style.display = "none";  
}
function showCakes(){
    top_dishes_section.style.display = "none";
    assorted_menu.style.display = "none";
    rolls_menu.style.display = "none";
    pizza_menu.style.display = "none";
    cake_menu.style.display = "block";
    cake.style.display = "grid";
    pasta_menu.style.display = "none";
    sandwich_menu.style.display = "none";
    noodles_menu.style.display = "none";
    salad_menu.style.display = "none";
}
function showPasta(){
    top_dishes_section.style.display = "none";
    assorted_menu.style.display = "none";
    rolls_menu.style.display = "none";
    pizza_menu.style.display = "none";
    cake_menu.style.display = "none";
    pasta_menu.style.display = "block";
    pasta.style.display = "grid";
    sandwich_menu.style.display = "none";
    noodles_menu.style.display = "none";
    salad_menu.style.display = "none";
}
function showSandwich(){
    top_dishes_section.style.display = "none";
    assorted_menu.style.display = "none";
    rolls_menu.style.display = "none";
    pizza_menu.style.display = "none";
    cake_menu.style.display = "none";
    pasta_menu.style.display = "none";
    sandwich_menu.style.display = "block";
    sandwich.style.display = "grid";
    noodles_menu.style.display = "none";
    salad_menu.style.display = "none";
}
function showNoodles(){
    top_dishes_section.style.display = "none";
    assorted_menu.style.display = "none";
    rolls_menu.style.display = "none";
    pizza_menu.style.display = "none";
    cake_menu.style.display = "none";
    pasta_menu.style.display = "none";
    sandwich_menu.style.display = "none";
    noodles_menu.style.display = "block";
    noodles.style.display = "grid";
    salad_menu.style.display = "none";
}
function showSalad(){
    top_dishes_section.style.display = "none";
    assorted_menu.style.display = "none";
    rolls_menu.style.display = "none";
    pizza_menu.style.display = "none";
    cake_menu.style.display = "none";
    pasta_menu.style.display = "none";
    sandwich_menu.style.display = "none";
    noodles_menu.style.display = "none";
    salad_menu.style.display = "block";
    salad.style.display = "grid";
}