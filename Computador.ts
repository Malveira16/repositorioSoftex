import { iProduto } from "./iProduto";
import { PC } from "./PC";
import { Server } from "./Server";
export  class Computador implements iProduto{
    protected ram: number;
    protected HDD: number;
    protected CPU: number;
    protected tipo: string;

    constructor(ram: number, HDD: number, CPU: number, tipo: string){
        this.ram = ram;
        this.HDD = HDD;
        this.CPU = CPU;
        this.tipo = tipo;

    }

    criarProduto(): iProduto {
        if (this.tipo === "PC") {
            return new PC(this.ram, this.HDD, this.CPU, this.tipo);
        } else if (this.tipo === "Server") {
            return new Server(this.ram, this.HDD, this.CPU, this.tipo);
        } else {
            throw new Error("Tipo de computador desconhecido");
        }
    }
     
    getRam(): number {
        return this.ram;
    }

    getHdd(): number {
        return this.HDD;
    }

    getCPU(): number {
        return this.CPU;
    }

    getTipo(): string {
        return this.tipo;
    }

    toString(): string {
        return `Computador: RAM ${this.ram} GB, HDD ${this.HDD} GB, CPU ${this.CPU}, Tipo ${this.tipo}`;
    }

}