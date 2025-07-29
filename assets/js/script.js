const order = {
    food : { 
        name : null,
        price : null
    },
    drink : {
        name : null,
        price : null
    }, 
    dessert : {
        name : null,
        price : null
    }
}

let customer;
let address;

const buttonConfirm = document.getElementById("button-confirm");
const buttonGoBack = document.getElementById("button-goback");

buttonConfirm.addEventListener('click', () => {
    sendOrder();
});

buttonGoBack.addEventListener('click', () => {
    const popUp = document.querySelector(".popup-container");
    popUp.style.display = "none";
})

function totalPrice() {
    return `${(parseFloat(order.food.price) + parseFloat(order.drink.price) + parseFloat(order.dessert.price)).toFixed(2)}€`;
}

function sendOrder() {
    customer = prompt("Please, what is your name?");
    address = prompt("What is the address we should delivery?")

    if (customer && address && document.querySelectorAll('.selected').length == 3) {
        let message = `Hello! I'd like to order:\n- ${order.food.name} (${order.food.price})\n- ${order.drink.name} (${order.drink.price})\n- ${order.dessert.name} (${order.dessert.price})\n*TOTAL: ${totalPrice()}*\n\nMy name is ${customer.trim()}\nPlease deliver to ${address.trim()}`;
        window.open("https://wa.me/14155238886?text="+encodeURIComponent(message));
    } else {
        alert("Both name and address fields are required, please try again.")
    }
}

function checkOrderComplete() {
    if (order.food.name && order.drink.name && order.dessert.name) {
        let sendButton = document.querySelector(".send");
        sendButton.disabled = false;
        sendButton.classList.add("active");
        return true;
    } else {
        return false;
    }
}

function chooseFood(element) {
    if (order.food.name && order.food.price) {
        let entireFoodSection = document.querySelector('.food .container');
        let elementSelected = entireFoodSection.querySelector(".selected");
        elementSelected.classList.remove("selected");
    }
    
    order.food.name = element.querySelector('.plate').innerHTML;
    order.food.price = element.querySelector('.price').innerHTML;

    element.classList.toggle('selected');
    console.log(order.food.name, order.food.price);
    checkOrderComplete();
}

function chooseDrink(element) {
    if (order.drink.name && order.drink.price) {
        let entireDrinkSection = document.querySelector('.drink .container');
        let elementSelected = entireDrinkSection.querySelector(".selected");
        elementSelected.classList.remove("selected");
    }

    order.drink.name = element.querySelector('.plate').innerHTML;
    order.drink.price = element.querySelector('.price').innerHTML;

    element.classList.toggle('selected');
    console.log(order.drink.name, order.drink.price);
    checkOrderComplete();
}

function chooseDessert(element) {
    if (order.dessert.name && order.dessert.price) {
        let entireDessertSection = document.querySelector('.dessert .container');
        let elementSelected = entireDessertSection.querySelector(".selected");
        elementSelected.classList.remove("selected");
    }

    order.dessert.name = element.querySelector('.plate').innerHTML;
    order.dessert.price = element.querySelector('.price').innerHTML;

    element.classList.toggle('selected');
    console.log(order.dessert.name, order.dessert.price);
    checkOrderComplete();
}

function showPopUp() {
    const details = document.querySelectorAll(".popup-details div");
    const categories = ['food', 'drink', 'dessert']
    // const totalPrice = parseFloat(order.food.price) + parseFloat(order.drink.price) + parseFloat(order.dessert.price);

    for (let i = 0 ; i < categories.length ; i++) {
        const item = order[categories[i]]
        details[i].innerHTML =
        `
        <p>${item.name}</p>
        <p>${item.price}</p>
        `;
    }

    details[details.length - 1].innerHTML =
    `
    <p>TOTAL: </p>
    <p>${totalPrice()}</p>
    `;
    const popUp = document.querySelector(".popup-container");
    popUp.style.display = "block";
}