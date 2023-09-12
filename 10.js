"use strict";
class Jogador {
    constructor(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    atacar(jogadorAtacado) {
        if (this.estaVivo() == true) {
            jogadorAtacado.pontosAtuais = jogadorAtacado.pontosAtuais - this.calcularAtaque();
        }
    }
    estaVivo() {
        if (this.pontosAtuais > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    toString() {
        console.log(`Força: ${this.forca}
Nível: ${this.nivel}
Pontos: ${this.pontosAtuais}`);
    }
}
let j1 = new Jogador(5, 2, 100);
let j2 = new Jogador(4, 1, 100);
j1.atacar(j2);
j2.toString();
j2.atacar(j1);
j1.toString();
console.log('Jogador 1 está vivo? ' + j1.estaVivo());
console.log('Jogador 2 está vivo? ' + j2.estaVivo());
