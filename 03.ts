//let quantReservas: number;

class Hotel {
    quantReservas : number;

    constructor (quantResevas: number){
        this.quantReservas = quantResevas;
    }
    adicionarReserva() : void {
        this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);