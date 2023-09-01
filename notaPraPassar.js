var nota1 = parseFloat(prompt("digite a primeira nota: "));
var nota2 = parseFloat(prompt("digite a segunda nota: "));
var terceiraNota = 21 - (nota1 + nota2);
console.log("Você precisa tirar " + terceiraNota.toFixed(2) + " para ser aprovado por média.");