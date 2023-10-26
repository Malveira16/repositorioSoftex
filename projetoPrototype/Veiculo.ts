export abstract class Veiculo {
    modelo : string;
    marca : string;
    cor : string;
    numeroRodas : number;
    constructor(modelo : string, marca : string, cor : string, numeroRodas : number) {
        this.modelo = modelo;
        this.marca = marca
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        
    }

    abstract clone(): Veiculo;

    

     abstract represent(): string;

    
}