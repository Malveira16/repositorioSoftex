import { Veiculo } from "./Veiculo";
export class Moto extends Veiculo{
    cilindrada : number;
    tempoMotor : number;
    numeroRodas: number = 2

    constructor(cilindrada : number,tempoMotor : number, modelo: string, marca : string, cor : string){
        super(modelo, marca, cor, 2)
        this.cilindrada = cilindrada;
        this.tempoMotor = tempoMotor;
    }

    clone(): Veiculo {
        return new Moto(this.cilindrada, this.tempoMotor, this.modelo, this.marca, this.cor)
    }

    represent(): string {
        return `Moto ${this.marca} ${this.modelo}, Cilindrada: ${this.cilindrada}cc, Cor: ${this.cor}, Tempo do Motor: ${this.tempoMotor}s`;
    }
}