import { Clube } from "./clube";
import { Patrocinio } from "./patrocinio";
export class Campeonato{
    private nomeCampeonato: string;
    private clubes: Clube[];
    private valorPremiacao: number;
    constructor(nomeCampeonato: string, valorPremiacao: number) {
        this.nomeCampeonato = nomeCampeonato;
        this.clubes = [];
        this.valorPremiacao = valorPremiacao;
    }
    adicionaClube(clube: Clube) {
        this.clubes.push(clube);
    }
    removeClube(clube: Clube) {
        this.clubes.splice(this.clubes.indexOf(clube), 1);
    }
    iniciarCampeonato(): void{


    }

}