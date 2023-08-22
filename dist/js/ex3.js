"use strict";
class circle {
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    area() {
        return Math.PI * this.raio ** 2;
    }
    perimetro() {
        return 2 * Math.PI * this.raio;
    }
    volume() {
        return 0.75 * Math.PI * this.raio ** 3;
    }
}
const circulo = new circle(3);
console.log("Circulo: ");
console.log(circulo.area());
console.log(circulo.perimetro());
console.log(circulo.volume());
console.log("Cone: ");
class cone extends circle {
    h = this.raio * Math.sqrt(3);
    g = Math.sqrt(this.h ** 2 + this.raio ** 2);
    areal() {
        return Math.PI * this.raio * this.g;
    }
    areat() {
        return circulo.area() + cone1.areal();
    }
    volume() {
        return 0.33 * circulo.area() * this.h;
    }
}
const cone1 = new cone(3);
console.log(cone1.areal());
console.log(cone1.areat());
console.log(cone1.volume());
