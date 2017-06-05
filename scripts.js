// scripts.js

function getTriangleArea(a, h) {
	if(a <= 0 || h <= 0) {
		return("Nieprawidłowe dane");
	} else {
		return(a*h/2);
	}
};

console.log( getTriangleArea(15, 10) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(15, 10);
var triangle3Area = getTriangleArea(8, 12);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);