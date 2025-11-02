let numberMouth = 9;
let temperature = -5;

if (numberMouth === 12 || numberMouth === 1 || numberMouth === 2) {
    if (temperature <= -25) {
        console.log("Зима (холодная зима)")
    } else { console.log("Зима") }


} else if (numberMouth === 3 || numberMouth === 4 || numberMouth === 5) {
    if (temperature < 15) {
        console.log("Весна (прохладная весна)");
    } else { console.log("Весна") }


} else if (numberMouth === 6 || numberMouth === 7 || numberMouth === 8) {
    if (temperature >= 30) {
        console.log("Лето (жаркое лето)")
    } else { console.log("Лето") }

} else {
    if (temperature < 0) {
        console.log("Осень (прохладная осень)")
    } else { console.log("Осень") }

}