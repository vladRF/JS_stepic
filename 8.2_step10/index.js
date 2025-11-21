let str = "1, 2, три, 4, пять"

let array = str.split(", ");
let finalArray = []
for (const i of array) {
    if (isNaN(i)) {
        finalArray.push(i)

    } else {
        finalArray.push(Number(i))
    }
}

console.log(finalArray)