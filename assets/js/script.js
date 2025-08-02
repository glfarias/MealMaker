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

const buttonConfirm = document.getElementById("button-confirm");
const buttonGoBack = document.getElementById("button-goback");
const allProducts = document.querySelectorAll('.product');
const allContainers = document.querySelectorAll('.container');

allContainers.forEach((container) => {
    container.addEventListener('scroll', () => {
        setInterval(() => {document.getElementById('hint').style.display = "none";}, 1500);
    })
})

allProducts.forEach((product) => {
    product.addEventListener('click', choose)
})

buttonConfirm.addEventListener('click', () => {
    sendOrder();
})

buttonGoBack.addEventListener('click', () => {
    const popUp = document.querySelector(".popup-container");
    popUp.style.display = "none";
})

function totalPrice() {
    return `${(parseFloat(order.food.price) + parseFloat(order.drink.price) + parseFloat(order.dessert.price)).toFixed(2)}€`;
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

function choose(event) {
    const categories = ['food', 'drink', 'dessert'];
    const sectionClicked = event.target.closest('section');
    const productClicked = event.target.closest('.product');
    const nameClicked = productClicked.querySelector('p.plate').innerHTML
    const priceClicked = productClicked.querySelector('p.price').innerHTML;

    // RUN 3 TIMES, ONLY 1 IS GONNA BE TRUE
    for (let i = 0 ; i < categories.length ; i++) {

        if (sectionClicked.classList.contains(`${categories[i]}`)) {
            // EVERYTHING BELOW WILL RUN ONLY ONCE

            // CHECK IF THERE IS AN ELEMENT SELECTED AND REMOVES THE CLASS SELECTED FROM IT
            const containerOfSectionClicked = sectionClicked.querySelector('.container');
            const elementSelected = containerOfSectionClicked.querySelector('.selected');
            if (elementSelected) {
                elementSelected.classList.remove('selected');
            }

            // ADDS THE CLASS SELECTED TO THE PRODUCT CLICKED
            productClicked.classList.add('selected');

            const item = order[categories[i]];
            item.name = nameClicked;
            item.price = priceClicked;
        }

    }

    checkOrderComplete();
}

function showPopUp() {
    const details = document.querySelectorAll(".popup-details div");
    const categories = ['food', 'drink', 'dessert']

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
    <p>TOTAL </p>
    <p>${totalPrice()}</p>
    `;

    const popUp = document.querySelector(".popup-container");
    popUp.style.display = "block";
}

function sendOrder() {
    const customer = document.getElementById('customer').value;
    const address = document.getElementById('address').value;

    if (customer && address && document.querySelectorAll('.selected').length == 3) {
        let message = `Hello! I'd like to order:\n- ${order.food.name} (${order.food.price})\n- ${order.drink.name} (${order.drink.price})\n- ${order.dessert.name} (${order.dessert.price})\n*TOTAL: ${totalPrice()}*\n\nMy name is ${customer.trim()}\nPlease deliver to ${address.trim()}`;
        window.open("https://wa.me/14155238886?text="+encodeURIComponent(message));
    } else {
        const requiredText = document.getElementById('required-text');
        requiredText.textContent = '';
        requiredText.textContent = 'Both name and address fields are required';
        }
}