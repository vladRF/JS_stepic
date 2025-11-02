let num1 = 4;
let num2 = 2;
let num3 = 3;

function checkTriangleExistence(a, b, c){
    if(a >= (b + c) || b >= (c + a) || c >= (a+b)){
        console.log("Треугольник не существует")
    }else{
        console.log("Треугольник существует")

    }
}

checkTriangleExistence(num1, num2, num3)