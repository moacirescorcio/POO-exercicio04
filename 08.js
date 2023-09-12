"use strict";
class Equipamento {
    constructor(ligado) {
        this.ligado = ligado;
    }
    liga() {
        if (this.ligado == false) {
            this.ligado = true;
        }
    }
    desliga() {
        if (this.ligado == true) {
            this.ligado = false;
        }
    }
    inverte() {
        if (this.ligado == true) {
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
    }
    estaLigado() {
        return (this.ligado);
    }
}
let eqp1 = new Equipamento(false);
console.log('Está ligado? ' + eqp1.estaLigado());
eqp1.liga();
console.log('Está ligado? ' + eqp1.estaLigado());
eqp1.desliga();
console.log("Está ligado? " + eqp1.estaLigado());
eqp1.inverte();
console.log("Está ligado? " + eqp1.estaLigado());
