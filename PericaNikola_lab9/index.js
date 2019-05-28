var str = 'cascading style sheets';
var novi = '';
var css = '';
var br = 0;

novi = str.split(' ');

for (el of novi)
{
	css += el[0].toUpperCase();
}

console.log(css);
css = `${str} (${css})`;
console.log(css);
for (i  of css)
{
if(i == 'S' || i == 's')
    br+=1;
}
console.log("Broj slova 'S' je ", br)


var hexa1 = "#aae31c";
var hexa2 = "99HEEE#";
var regEx1 = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
console.log(regEx1.test(hexa1));
console.log(regEx1.test(hexa2));

var mail1 = "testy@test.com";
var mail2 = "nevalja.org@com"
var regEx2 = /^[a-z_]+@([a-z]+\.)+[a-z]{2,3}$/;
console.log(regEx2.test(mail1));
console.log(regEx2.test(mail2));
            
var br1 = "-4.4";
var br2 = "04.4";
var br3 = "0.4";
var regEx3 = /^[-]?([0-9]|[1-9][0-9]+)(\.[0-9]+)?$/;
console.log(regEx1.test(br1));
console.log(regEx1.test(br2));
console.log(regEx1.test(br3))