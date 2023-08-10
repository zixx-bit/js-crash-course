// reurn = returns a value back to the place where you invoked a function

// eg area of 5*6 is 30



let area;
let height;
let width;
width = window.prompt("Enter width");
height = window.prompt("height");

area = getArea(width, height); //this is equal to 30 as well i.e area = 30

console.log (area);

function getArea(width, height){
    let result= width * height;
    return result;
}