import { Jogador } from "./jogador";


export class Clube {
    private nome: string;
    private nomeEstadio: string;
    private elenco: Jogador[];
    private elencoReserva: Jogador[];
    private forcaDoElenco: number;
    private saldo: number;
    private titulos: number;
    private folhaPagamento: number;
    private bilheteria: number;
    private patrocinio: number;
    private socioTorcedor: number;
    private capacidadeEstadio: number;
    private publicoPagante: number;
    private historico: string[];
    

    constructor(nome: string, saldo: number, capacidadeEstadio: number, nomeEstadio: string) {
        this.nome = nome;
        this.nomeEstadio = nomeEstadio;
        this.saldo = saldo;
        this.titulos = 0;
        this.elenco = [];
        this.elencoReserva = [];
        this.folhaPagamento = 0;
        this.bilheteria = 0;
        this.patrocinio = 0;
        this.socioTorcedor = 100;
        this.forcaDoElenco = this.calcularForcaDoElenco();
        this.capacidadeEstadio = capacidadeEstadio;
        this.historico = [];
        this.publicoPagante = this.capacidadeEstadio;
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
    calcularPagantes() {
        if(this.publicoPagante >= this.capacidadeEstadio){
            console.log("Estádio " + this.nomeEstadio +  " Lotado para o jogo de hoje!");
            this.publicoPagante = this.capacidadeEstadio;
            this.saldo += this.publicoPagante * 10;
            console.log("Bilheteria: " + this.publicoPagante);
            console.log("Saldo: " + this.saldo);
        }
        else if(this.publicoPagante < this.capacidadeEstadio && this.historico[this.historico.length - 1] === "V"){
            this.saldo += this.publicoPagante * 10;
            this.publicoPagante += this.publicoPagante * 0.1;
            console.log("Bilheteria: " + this.publicoPagante);
            console.log("Saldo: " + this.saldo);
        }
        else if(this.publicoPagante < this.capacidadeEstadio && this.historico[this.historico.length - 1] === "D"){
            this.saldo += this.publicoPagante * 10;
            this.publicoPagante -= this.publicoPagante * 0.1;
            console.log("Bilheteria: " + this.publicoPagante);
            console.log("Saldo: " + this.saldo);
        }
        else if(this.publicoPagante < this.capacidadeEstadio && this.historico[this.historico.length - 1] === "E"){
            this.saldo += this.publicoPagante * 10;
            this.publicoPagante += this.publicoPagante * 0.05;
            console.log("Bilheteria: " + this.publicoPagante);
            console.log("Saldo: " + this.saldo);
        }
    }

     

    jogarPartida(this, clube: Clube){
        if(this.elenco.length == 11 && clube.elenco.length == 11){
            console.log(this.nome + "Enfrentará o " + clube.nome);
            if(this.forcaDoElenco > clube.forcaDoElenco) {
                console.log(this.nome + " ganhou a partida!");
                this.calcularPagantes();
                this.historico.push("V");
                clube.historico.push("D");
                if(this.historico.length == 6){
                    this.historico.shift();
                }
                if(clube.historico.length == 6){
                    clube.historico.shift();
                }
            
            } else if(this.forcaDoElenco < clube.forcaDoElenco){
                console.log(clube.nome + " ganhou a partida!");
                this.calcularPagantes();
                this.historico.push("D");
                clube.historico.push("V");
                if(this.historico.length == 6){
                    this.historico.shift();
                }
                if(clube.historico.length == 6){
                    clube.historico.shift();
                }
                
            }else{
                console.log("O jogo empatou");
                this.calcularPagantes();
                this.historico.push("E");
                clube.historico.push("E");
                if(this.historico.length == 6){
                    this.historico.shift();
                }
                if(clube.historico.length == 6){
                    clube.historico.shift();
                }
            }

        } else{
            console.log("Os times não estão com 11 jogadores em campo");
        }
    }
    //deve ser chamado todo mês
    recolherSocioTorcedor(): number{
        let sequenciaVitorias = ["V","V","V","V","V",];
        if(this.historico == sequenciaVitorias && this.historico.length == 5){
            this.socioTorcedor += 100;
        }
        this.socioTorcedor += 1000* this.titulos;
        return this.saldo += this.socioTorcedor * 20;


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
    getCapacidadeEstadio(): number {
        return this.capacidadeEstadio;
    }

}