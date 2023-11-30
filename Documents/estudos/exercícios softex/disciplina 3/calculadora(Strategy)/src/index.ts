import { Soma } from './Soma';
import { Subtracao } from './Subtracao';
import { Multiplicacao } from './Multiplicacao';
import { iStrategy } from './iStrategy';
import * as readline from 'readline';

const soma = new Soma();
const subtracao = new Subtracao();
const multiplicacao = new Multiplicacao();

const rl = readline.createInterface({
   
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (primeiroNumero) => {
    rl.question('Digite o segundo número: ', (segundoNumero) => {
      rl.question('Digite 1 para somar, digite 2 para subtrair, digite 3 para multiplicar: ', (escolha) => {
        if(escolha == '1') {
            const resultado = soma.execute(parseFloat(primeiroNumero), parseFloat(segundoNumero))
            console.log(`Resultado da soma: ${resultado}`);
        }
        else if(escolha == '2') {
            const resultado = subtracao.execute(parseFloat(primeiroNumero), parseFloat(segundoNumero));
            console.log(`Resultado da subtração: ${resultado}`);
        }
        else if(escolha == '3') {
            const resultado = multiplicacao.execute(parseFloat(primeiroNumero), parseFloat(segundoNumero));
            console.log(`Resultado da multiplicação: ${resultado}`);
        }
        else{
            console.log("Opção inválida");
        }
        rl.close();
      });
     
    });
});