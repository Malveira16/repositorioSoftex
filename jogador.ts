export class Jogador {
    private nome: string;
    private idade: number;
    private altura: number;
    private peso: number;
    private nacionalidade: string;
    private posicao: string;
    private forca: number;
    private velocidade: number;
    private habilidade: number;
    private overAll: number;
    private valorDeMercado: number;
 
     constructor(nome: string, idade: number, altura: number, peso: number, nacionalidade: string, posicao: string, forca: number, velocidade: number, habilidade: number) {
         this.nome = nome;
         this.idade = idade;
         this.altura = altura;
         this.peso = peso;
         this.nacionalidade = nacionalidade;
         this.posicao = posicao;
         this.forca = forca;
         this.velocidade = velocidade;
         this.habilidade = habilidade;
         this.overAll = this.gerarOverAll();
         this.valorDeMercado = this.gerarValorDeMercado();
 }
 gerarOverAll() {
     return (this.forca + this.velocidade + this.habilidade) / 3 - this.idade * 10;
 
 }
 
 gerarValorDeMercado() {
     return this.overAll * 10;
 
 }
 
 getNome() {
     return this.nome;
 }
 
 getIdade() {
     return this.idade;
 }
 
 getAltura() {
     return this.altura;
 }
 
 getPeso() {
     return this.peso;
 }
 
 getNacionalidade() {
     return this.nacionalidade;
 }
 
 getPosicao() {
     return this.posicao;
 }
 
 getForca() {
     return this.forca;
 }
 
 getVelocidade() {
     return this.velocidade;
 }
 
 getHabilidade() {
     return this.habilidade;
 }
 
 getOverAll() {
     return this.overAll;
 }
 
 getValorDeMercado() {
     return this.valorDeMercado;
 }
 
 setNome(nome: string) {
     this.nome = nome;
 }
 
 setIdade(idade: number) {
     this.idade = idade;
 }
 
 setAltura(altura: number) {
     this.altura = altura;
 }
 
 setPeso(peso: number) {
     this.peso = peso;
 }
 
 setNacionalidade(nacionalidade: string) {
     this.nacionalidade = nacionalidade;
 }
 
 setPosicao(posicao: string) {
     this.posicao = posicao;
 }
 
 setForca(forca: number) {
     this.forca = forca;
 }
 
 setVelocidade(velocidade: number) {
     this.velocidade = velocidade;
 }
 
 setHabilidade(habilidade: number) {
     this.habilidade = habilidade;
 }
 
 
 
 
 
 }
 