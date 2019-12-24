let a=prompt();
let b=prompt();
let c=prompt();
console.log(a+ ' '+b+' '+c);
if (isNaN(a)||isNaN(b)||isNaN(c)||a==0) {
    console.log('Invalid input data');
} else
{
    let dis = b * b - 4 * a * c;
    if (dis < 0) {
        console.log('no solution');
    } else {
        let x1 = Math.round((-b + Math.sqrt(dis)) / (2 * a));
        let x2 = Math.round((-b - Math.sqrt(dis)) / (2 * a));
        if (x1 == x2) {
            console.log('x = ' + x1);
        } else {
            console.log('x1 = ' + x1 + ' and x2 = ' + x2);
        }
    }
}
