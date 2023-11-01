import { Computador } from "./Computador";
import { iProduto } from "./iProduto";

export class Server extends Computador{
    tamanhoRack: string;
    numeroDeNucleos: number;
    protected tipo: string = "Server";

    constructor(ram: number, HDD: number, CPU: number, tipo: string){
        super(ram, HDD, CPU, tipo)
        this.tamanhoRack = "4U";
        this.numeroDeNucleos = 16;
    }

    

}