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
    iniciarCampeonato(){
        for(let clube of this.clubes){
            let pagamento = Patrocinio.pagarPatrocinio(clube);
            let torcedores = clube.getSocioTorcedor();
            let saldo = clube.getSaldo();
            let titulos = clube.getTitulos();
            let novosSocios = torcedores + (titulos* 1000);
            let novoSaldo = saldo + (torcedores * 20);
        }



    }

}