"use strict";
//05)a. 90, pois todos apontam para o mesmo local de memória de c2.
//b. O objeto referenciado por c1 é perdido, futuramente o GC irá excluir esse objeto da memória automaticamente liberando espaço:
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
let c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo()); //90
console.log(c2.consultarSaldo()); //90
console.log(c3.consultarSaldo()); //90
