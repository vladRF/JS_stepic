let fruits = ["Яблоко", "Груша", "Вишня", "Абрикос"];

for (let i = 0; i != 2; i++) {
    fruits.shift()
}
fruits.unshift("Апельсин", "Банан")

console.log(fruits)