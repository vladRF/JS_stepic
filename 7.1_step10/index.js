const itemName = "Майка";
const itemPrice = 300;
const quantity = 6;

function calculateTotal(a, b, c) {
    return `Вы выбрали ${quantity} товаров \"${itemName}\" по цене ${itemPrice} рублей за штуку. Итого: ${itemPrice * quantity}.`
}

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);