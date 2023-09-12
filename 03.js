"use strict";
//let quantReservas: number;
class Hotel {
    constructor(quantResevas) {
        this.quantReservas = quantResevas;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(2);
console.log(hotel.quantReservas);
