"use strict";
class Triangulo {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ehTriangulo() {
        if (Math.abs(this.b - this.c) < this.a && this.a < (this.b + this.c)) {
            return true;
        }
        else {
            return false;
        }
    }
    ehEquilatero() {
        if (this.ehTriangulo()) {
            if (this.a == this.b && this.b == this.c) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    ehIsoceles() {
        if (this.ehTriangulo()) {
            if (this.a == this.b || this.b == this.c || this.c == this.a) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    ehEscaleno() {
        if (this.ehTriangulo()) {
            if (!this.ehIsoceles() && !this.ehEquilatero()) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
let t1 = new Triangulo(3, 3, 3);
console.log("t1 é triangulo? " + t1.ehTriangulo());
let t2 = new Triangulo(10, 1, 1);
console.log("t2 é triangulo? " + t2.ehTriangulo());
let t3 = new Triangulo(2, 2, 3);
let t4 = new Triangulo(2, 3, 4);
console.log("t1 é equilátero? " + t1.ehEquilatero());
console.log("t2 é equilátero? " + t2.ehEquilatero());
console.log("t3 é equilátero? " + t3.ehEquilatero());
console.log("");
console.log("t1 é escaleno? " + t1.ehEscaleno());
console.log("t2 é escaleno? " + t2.ehEscaleno());
console.log("t3 é escaleno? " + t3.ehEscaleno());
console.log("t4 é escaleno? " + t4.ehEscaleno());
console.log("");
console.log("t1 é isóceles? " + t1.ehIsoceles());
console.log("t2 é isóceles? " + t2.ehIsoceles());
console.log("t3 é isóceles? " + t3.ehIsoceles());
console.log("t4 é isóceles? " + t4.ehIsoceles());
