var a= 2;
var b= 3;
var hipotenuza = (a,b) => {
    function korijen(a){return Math.sqrt(a)};
    function kvadrat(a){return a*a};
    return korijen (kvadrat(a) + kvadrat(b));
};
console.log(hipotenuza(a,b));



function pozdrav (poruka1) {
    return (poruka2) => {
        return (poruka3) => {
            console.log(`${poruka1}: ${poruka2} - ${poruka3}`);
        }
    }
}
const poruka = pozdrav("Kolegij i ECTS bodovi");
poruka("MUP")("6");


var niz = Array.from({length: 20}, () => Math.floor(Math.random()*90)+ 10);
console.log(niz);

var novi = niz.filter(x => (x > 50 && x < 90));

novi.sort();
console.log(novi);

var min = Math.min(...novi);
var max = Math.max(...novi);

console.log(min,max);

novi = novi.filter(x => x !== min && x !== max);
console.log(novi);

console.log("SUMA:" + novi.reduce((sum, x) => sum += x));