import { Computador } from "./Computador";
import { iProduto } from "./iProduto";
export class PC extends Computador{
    tamanhoMonitor: number;
    placaDeVideo: string;

    constructor( ram: number, HDD: number, CPU: number, tipo: string){
        super(ram,HDD,CPU,tipo)
        this.tamanhoMonitor = 15;
        this.placaDeVideo = "NVIDIA GeForce RTX 3080";
        this.ram = ram;
        this.HDD = HDD;
        this.CPU = CPU;
        this.tipo = tipo;

    }

    
}