"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PC = void 0;
const Computador_1 = require("./Computador");
class PC extends Computador_1.Computador {
    constructor(ram, HDD, CPU, tipo) {
        super(ram, HDD, CPU, tipo);
        this.tamanhoMonitor = 15;
        this.placaDeVideo = "NVIDIA GeForce RTX 3080";
        this.ram = ram;
        this.HDD = HDD;
        this.CPU = CPU;
        this.tipo = tipo;
    }
}
exports.PC = PC;
