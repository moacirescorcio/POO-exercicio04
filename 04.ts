/*4. Considere a classe Radio e as instruções que fazem seu uso abaixo:
class Radio {
volume : number;
constructor(volume : number) {
this.volume = volume;

}
}
let r : Radio = new Radio();
r.volume = 10;
Justifique o erro de compilação e proponha uma solução.*/

//Resposta: Faltou um parâmentro quando instanciado o objeto

class Radio {
    volume : number;
    constructor(volume : number) {
        this.volume = volume;
    
    }
    }
    let r : Radio = new Radio(2);
    console.log(r.volume)
    r.volume = 10;
    console.log(r.volume)