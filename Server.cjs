"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Computador_1 = require("./Computador");
class Server extends Computador_1.Computador {
    constructor(ram, HDD, CPU, tipo) {
        super(ram, HDD, CPU, tipo);
        this.tipo = "Server";
        this.tamanhoRack = "4U";
        this.numeroDeNucleos = 16;
    }
}
exports.Server = Server;
