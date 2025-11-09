let userInput = 18;

if (isNaN(userInput)) {

    console.log("Ошибка: Введите ваш возраст")
} else if (userInput >= 18 && userInput <= 65) {
    console.log("Доступ разрешен")
} else {
    console.log("Доступ запрещен")
}