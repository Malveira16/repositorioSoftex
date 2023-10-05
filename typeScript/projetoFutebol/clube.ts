import { Jogador } from "./jogador";


export class Clube {
    private nome: string;
    private elenco: Jogador[];
    private elencoReserva: Jogador[];
    private forcaDoElenco: number;
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
        this.elencoReserva = [];
        this.folhaPagamento = 0;
        this.bilheteria = 0;
        this.patrocinio = 0;
        this.socioTorcedor = 0;
        this.forcaDoElenco = this.calcularForcaDoElenco();

    }
     adiciona(jogador: Jogador) {
        this.elenco.push(jogador);
    }
     remove(jogador: Jogador) {
        this.elenco.splice(this.elenco.indexOf(jogador), 1);
    }

     venderJogador(jogador : Jogador, clube : Clube): number {
        this.remove(jogador);
        console.log("O jogador" + jogador.getNome() + "Foi vendido para o clube " + clube.getNome());
        clube.saldo -= jogador.getValorDeMercado();
        clube.adiciona(jogador)
        return this.saldo += jogador.getValorDeMercado();
    }

    comprarJogador(jogador: Jogador, clube: Clube): number {
        if(this.saldo >= jogador.getValorDeMercado()){
            this.adiciona(jogador);
            console.log("O jogador " + jogador.getNome() + " foi comprado do clube " + clube.getNome());
            clube.venderJogador(jogador, this);
            return this.saldo -= jogador.getValorDeMercado();
        } else {
            console.log("Não há saldo suficiente para comprar o jogador ");
            return this.saldo;
        }
        
    }
    calcularForcaDoElenco(): number {
        let soma: number = 0;
        for(const jogador of this.elenco) {
            soma += jogador.getOverAll();   
        }
        return soma / this.elenco.length;
    }

    jogarPartida(this, clube: Clube){
        if(this.elenco.length == 11 && clube.elenco.length == 11){
            console.log(this.nome + "Enfrentará o " + clube.nome);
            if(this.forcaDoElenco > clube.forcaDoElenco) {
                console.log(this.nome + " ganhou a partida!");
            } else if(this.forcaDoElenco < clube.forcaDoElenco){
                console.log(clube.nome + " ganhou a partida!");
            }else{
                console.log("O jogo empatou");
            }

        }
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
    getElenco(): Jogador[] {
        return this.elenco;
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
