import { Clube } from "./clube";
export class Patrocinio{
    private valor : number;
    constructor(){
        this.valor = 0;
    }
    getValor(): number {
        return this.valor;
    }
    static pagarPatrocinio(clube: Clube): number{
        let saldoDoClube = clube.getSaldo();
        let titulosDoClube = clube.getTitulos();
        let pagamento = (saldoDoClube + titulosDoClube) * 1000;
        return pagamento;

    }

}