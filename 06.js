"use strict";
class Saudacao {
    constructor(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao() {
        let textoConcatenado = this.texto + ', ' + this.destinatario;
        console.log(textoConcatenado);
    }
}
let saudacao1 = new Saudacao('Bom dia', 'João');
saudacao1.obterSaudacao();
