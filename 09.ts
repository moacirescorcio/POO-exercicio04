class Conta2 {
    numero: String;
    saldo: number;
    constructor(numero: String, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if((this.saldo - valor) < 0){
            return false;
        }else{
            this.saldo = this.saldo - valor;
            return true;
        }
        }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
        }
    consultarSaldo(): number {
        return this.saldo;
        }
    transferir(contaDestino: Conta, valor: number): boolean {
            if(this.sacar(valor)){
                contaDestino.depositar(valor);
                return true;
            }else{
                return false;
            }
    }
}

let c4: Conta = new Conta2("4444", 0)
let c5: Conta = new Conta2("5555", 100);
let c6: Conta = new Conta2("6666", 200);

c4.sacar(1);
console.log(c4.consultarSaldo());
c6.transferir(c4, 10);

console.log(c4.consultarSaldo());
console.log(c6.consultarSaldo());

c6.transferir(c4, 10000);
console.log(c4.consultarSaldo());
console.log(c6.consultarSaldo());