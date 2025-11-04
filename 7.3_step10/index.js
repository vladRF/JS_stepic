let string = "паприка";
let simbol = "г";
let count = 0;

for (i = 0; i < string.length; i++) {
    if (string[i] === simbol) {
        count += 1;

    }
}

console.log(`Символ \"${simbol}\" встречается ${count} раз(-а)`);