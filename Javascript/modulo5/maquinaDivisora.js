const entrada =require('prompt-sync')();
try{
    console.log("Bem vindo(a) à máquina divisora!")
    var n1 =  parseFloat(entrada("Digite o primeiro número:"));
    var n2 = parseFloat(entrada("Digite o segundo número:"));
    if(n2 ===0){
        throw new Error("Divisão por 0 não permitida.")
    }
    var resultado = n1/n2
   
    console.log("Resultado da divisão: " + resultado);
}catch(error){
    console.error("Ocorreu um erro na sua operação. atente-se em não utilizar o zero como divisor.", error.message);
}finally{
    console.log("Obrigado por usar a máquina divisora!")
}