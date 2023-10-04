import { Jogador } from "./jogador";


export class Clube {
    private nome: string;
    private elenco: Jogador[];
    private saldo: number;
    private titulos: number;
    private folhaPagamento: number;
    private bilheteria: number;
    private patrocinio: number;
    private socioTorcedor: number;

    constructor(nome: string, saldo: number) {
        this.nome = nome;
        this.saldo = saldo;
        this.titulos = 0;
        this.elenco = [];
        this.folhaPagamento = 0;
        this.bilheteria = 0;
        this.patrocinio = 0;
        this.socioTorcedor = 0;

    }
     adiciona(jogador: Jogador) {
        this.elenco.push(jogador);
    }
     remove(jogador: Jogador) {
        this.elenco.splice(this.elenco.indexOf(jogador), 1);
    }

     venderJogador(jogador : Jogador) {
        return this.saldo + jogador.getValorDeMercado();

    }

    comprarJogador(): void{
}
    jogarPartida(): void{
    }
    recolherBilheteria(): void{
    }
    assinarPatrocinio(): void{
    }
    recolherSocioTorcedor(): void{
    }
    renovarContrato(): void{
    }
    
    getNome(): string {
        return this.nome;
    }
    getSaldo(): number {
        return this.saldo;
    }
    getTitulos(): number {
        return this.titulos;
    }
    getFolhaPagamento(): number {
        return this.folhaPagamento;
    }
    getBilheteria(): number {
        return this.bilheteria;
    }
    getPatrocinio(): number {
        return this.patrocinio;
    }
    getSocioTorcedor(): number {
        return this.socioTorcedor;
    }
    setNome(nome: string) {
        this.nome = nome;
    }
    setSaldo(saldo: number) {
        this.saldo = saldo;
    }
    setTitulos(titulos: number) {
        this.titulos = titulos;
    }
    setFolhaPagamento(folhaPagamento: number) {
        this.folhaPagamento = folhaPagamento;
    }
    setBilheteria(bilheteria: number) {
        this.bilheteria = bilheteria;
    }
    setPatrocinio(patrocinio: number) {
        this.patrocinio = patrocinio;
    }
    setSocioTorcedor(socioTorcedor: number) {
        this.socioTorcedor = socioTorcedor;
    }


}
