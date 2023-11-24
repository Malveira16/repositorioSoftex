export abstract class Sanduiche{
    protected mussarelaRalado : number = 2.00;
    protected bacon : number = 0.99;
    protected peperoni : number = 0.99;

    abstract imprimirValor(): void;
    abstract adicionarIngrediente(igrediente1?: number, ingrediente2? : number, ingrediente3? : number ): number;

    getMussarelaRalado(): number {
      return this.mussarelaRalado;
    }

    getbacon(): number {
      return this.bacon;
    }

    getPeperoni(): number {
      return this.peperoni;
    }


     
}