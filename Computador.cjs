"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
const PC_1 = require("./PC");
const Server_1 = require("./Server");
class Computador {
    constructor(ram, HDD, CPU, tipo) {
        this.ram = ram;
        this.HDD = HDD;
        this.CPU = CPU;
        this.tipo = tipo;
    }
    criarProduto() {
        if (this.tipo === "PC") {
            return new PC_1.PC(this.ram, this.HDD, this.CPU, this.tipo);
        }
        else if (this.tipo === "Server") {
            return new Server_1.Server(this.ram, this.HDD, this.CPU, this.tipo);
        }
        else {
            throw new Error("Tipo de computador desconhecido");
        }
    }
    getRam() {
        return this.ram;
    }
    getHdd() {
        return this.HDD;
    }
    getCPU() {
        return this.CPU;
    }
    getTipo() {
        return this.tipo;
    }
    toString() {
        return `Computador: RAM ${this.ram} GB, HDD ${this.HDD} GB, CPU ${this.CPU}, Tipo ${this.tipo}`;
    }
}
exports.Computador = Computador;
