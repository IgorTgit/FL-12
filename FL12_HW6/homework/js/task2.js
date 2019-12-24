let a=prompt();
let b=prompt();
let c=prompt();
console.log(a*a+ ' '+b*b+' '+c*c);
if (a==''||b==''||c==''||a==undefined||b==undefined||c==undefined) {
    console.log('input values should be ONLY numbers');
} else if (a==0||b==0||c==0)
{
    console.log('A triangle must have 3 sides with a positive definite length');
} else if (((a + b)<= c)||( (b + c) <=a)||((a+c)<=b)) {
    console.log('Triangle doesn’t exist');
} else if (a==b && b==c) {
    console.log('Equilateral triangle');
} else if ((a==b)&&(a!==c)||(a==c)&&(b!==a)||(b==c)&&(b!==a)){
    console.log('Isosceles triangle');
} else {
    console.log('Scalene triangle');
}
