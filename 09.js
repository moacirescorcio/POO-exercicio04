"use strict";
class Conta2 {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        if ((this.saldo - valor) < 0) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
}
let c4 = new Conta2("4444", 0);
let c5 = new Conta2("5555", 100);
let c6 = new Conta2("6666", 200);
c4.sacar(1);
console.log(c4.consultarSaldo());
c6.transferir(c4, 10);
console.log(c4.consultarSaldo());
console.log(c6.consultarSaldo());
c6.transferir(c4, 10000);
console.log(c4.consultarSaldo());
console.log(c6.consultarSaldo());
