class Saudacao{
    texto: String;
    destinatario: String;

    constructor(texto: String, destinatario: String){
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): void {
        let textoConcatenado = this.texto + ', '+ this.destinatario;
        console.log(textoConcatenado);
    }
}

let saudacao1: Saudacao = new Saudacao('Bom dia', 'João')
saudacao1.obterSaudacao();
