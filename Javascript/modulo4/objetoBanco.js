const banco = {
    conta : "12345",
    saldo: 5000,
    tipoDeConta : "Conta Corrente",
    agencia : "4321",
    buscarSaldo: function() {
        return this.saldo;
    },
    depositar: function(deposito) {
        console.log("Depósito de R$:" + deposito + " realizado com sucesso!");
        return this.saldo + deposito;
        

    },
    sacar: function(saque) {
        console.log("Saque de R$:" + saque + " realizado com sucesso!");
        return this.saldo - saque;
        
    },
    numeroConta: function() {
        return this.conta;
    }
}

console.log(banco.buscarSaldo());
console.log(banco.depositar(500));
console.log(banco.sacar(200));
console.log(banco.numeroConta());