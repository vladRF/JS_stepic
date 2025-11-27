let values = "1, 2, 3";
let indexValue = "0, 2, 1";
let arrIndex = [];
let arr = values.split(", ");

for (const i of indexValue.split(", ")) {
    console.log(arr[Number(i)])
}


