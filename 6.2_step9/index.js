let num = 225;

const catalogue = {
    magazine: 5,
}

if (num > 10 && num <= 50) {
    catalogue.magazine = num;
    console.log(catalogue.magazine)
} else {
    console.log(`Введите число в диапазоне от 10 до 50 включительно`)
}