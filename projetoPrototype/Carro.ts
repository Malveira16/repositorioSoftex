import { Veiculo } from "./Veiculo";
export class Carro extends Veiculo{
    numeroPortas: number;
    vidroEletrico : boolean;
    numeroRodas: number = 4;

    constructor(numeroPortas: number, vidroEletrico: boolean, modelo: string, marca: string, cor : string,){
        super(modelo, marca, cor, 4)
        this.numeroPortas = numeroPortas;
        this.vidroEletrico = vidroEletrico;
        
    }

    clone(): Carro {
        return new Carro(this.numeroPortas, this.vidroEletrico, this.modelo, this.marca, this.cor)
        
    }

    represent(): string {
        return `Carro ${this.marca} ${this.modelo}, Cor: ${this.cor}, Portas: ${this.numeroPortas}, Vidro Elétrico: ${this.vidroEletrico ? 'Sim' : 'Não'}`;
        
    }

}