import { Sanduiche } from "./Sanduiche";

export class SanduicheCarne extends Sanduiche{

    preco: number = 4.50;

    constructor(){
        super()
        this.preco = 4.50;

    }

    imprimirValor(): void {
        this.preco = this.preco + this.adicionarIngrediente();
        console.log("TOTAL À PAGAR: " + this.preco);
        
    }

    adicionarIngrediente(igrediente1?: number, ingrediente2? : number, ingrediente3? : number): number {
         let somaIngrediente = (igrediente1 || 0) + (ingrediente2 || 0) + (ingrediente3 || 0);
         return somaIngrediente;
        
    }

    
}