Перед вами программа, которая принимает название товара, цену товара за штуку и количество товара и выводит сообщение в определенном формате с помощью функции ```calculateTotal``` с тремя параметрами. Напишите функцию ```calculateTotal```. Используйте интерполяцию.


```js const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

...

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);
```

![вывод программы](/7.1_step10/output.png)