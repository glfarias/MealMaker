let customer;
let address;
function sendOrder() {

    customer = prompt("Please, what is your name?");
    address = prompt("What is the address we should delivery?")


    /*
    
    GOTTA IMPROVE THIS IF BY:
    1. REMOVING !== UNDEFINED, BECAUSE WE ARE ALREADY CONTROLLING THAT THERE IS 3 PRODUCTS SELECTED
    2. WORKING ON BETTER ALERTS, TO INFORM CUSTOMER WHAT IS MISSING
        (SELECT FOOD? SELECT DRINK? SELECT DESSERT? TYPE NAME? TYPE ADDRES?)
    
    */
    if (food!==undefined && drink!==undefined && dessert!==undefined && customer && address && document.querySelectorAll('.selected').length == 3) {
        let message;
        message = `Hello! I'd like to order:\n- ${food}\n- ${drink}\n- ${dessert}\n${customer}\n${address}`;
        window.open("https://wa.me/+34123456789?text="+encodeURIComponent(message));
    } else {
        alert("Fill all the fields, please!")
    }
}







/*
GRABBING THE NAME OF
FOOD, DRINK, DESSERT
VVVVVVVVVVVVVVVVVVVV
*/

let food;
function chooseFood(element) {

    /*
    THIS FUNCTION IS CALLED EVERYTIME
    CUSTOMER CLICKS ON A FOOD
    */


    /*
    FIRST WE CHECK IF THERE IS A FOOD ALREADY SELECTED
    IF YES, WE REMOVE THE CLASS SELECTED FROM IT
    */
    if (food) {
        let entireFoodSection = document.querySelector('.food .container');
        let elementSelected = entireFoodSection.querySelector(".selected");
        elementSelected.classList.remove("selected");
    }
    
    /*
    ELEMENT IS THE DIV WITH CLASS PRODUCT
    NOW WE STORE IN food THE INNERHTML OF THE P INSIDE THE DIV
    (THAT INNERHTML IS THE NAME OF THE PLATE)
    THIS STRUCTURE:
    ELEMENT
        DIV
            P
                NAME OF THE DISH
    */
    food = element.querySelector('.plate').innerHTML;

    /*
    NOW WE FINALLY SET THE CLASS SELECTED TO THAT ELEMENT
    SO IT GLOWS GREEN
    */
    element.classList.toggle('selected');
    
    
    console.log(food)
}

let drink;
function chooseDrink(element) {

    /*
    THIS FUNCTION IS CALLED EVERYTIME
    CUSTOMER CLICKS ON A FOOD
    /*


    /*
    FIRST WE CHECK IF THERE IS A DRINK ALREADY SELECTED
    IF YES, WE REMOVE THE CLASS SELECTED FROM IT
    */
    if (drink) {
        let entireDrinkSection = document.querySelector('.drink .container');
        let elementSelected = entireDrinkSection.querySelector(".selected");
        elementSelected.classList.remove("selected");
    }

    /*
    ELEMENT IS THE DIV WITH CLASS PRODUCT
    NOW WE STORE IN drink THE INNERHTML OF THE P INSIDE THE ELEMENT
    (THAT INNERHTML IS THE NAME OF THE DRINK)
    THIS STRUCTURE:
    ELEMENT
        P
            NAME OF THE DRINK
            
    */
    drink = element.querySelector('.plate').innerHTML;

    /*
    NOW WE FINALLY SET THE CLASS SELECTED TO THAT ELEMENT
    SO IT GLOWS GREEN
    */
    element.classList.toggle('selected');
    console.log(drink);
}


let dessert;
function chooseDessert(element) {

    /*
    THIS FUNCTION IS CALLED EVERYTIME
    CUSTOMER CLICKS ON A DESSERT
    /*

    /*
    FIRST WE CHECK IF THERE IS A DESSERT ALREADY SELECTED
    IF YES, WE REMOVE THE CLASS SELECTED FROM IT
    */
    if (dessert) {
        let entireDessertSection = document.querySelector('.dessert .container');
        let elementSelected = entireDessertSection.querySelector(".selected");
        elementSelected.classList.remove("selected");
    }

    /*
    ELEMENT IS THE DIV WITH CLASS PRODUCT
    NOW WE STORE IN dessert THE INNERHTML OF THE P INSIDE THE ELEMENT
    (THAT INNERHTML IS THE NAME OF THE DESSERT)
    THIS STRUCTURE:
    ELEMENT
        P
            NAME OF THE DESSERT
            
    */
    dessert = element.querySelector('.plate').innerHTML;

    /*
    NOW WE FINALLY SET THE CLASS SELECTED TO THAT ELEMENT
    SO IT GLOWS GREEN
    */
    element.classList.toggle('selected');


    console.log(dessert);
}