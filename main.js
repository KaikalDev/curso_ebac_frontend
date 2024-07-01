function Casa(quartos, metrosQuadrados, preco) {
    this.quartos = quartos;
    this.metrosQuadrados = metrosQuadrados;
    this.preco = preco;
    this.precoPorMetroQuadrado = function() {
        return this.preco / this.metrosQuadrados;
    };
}

function Apartamento(quartos, metrosQuadrados, preco, andar) {
    Casa.call(this, quartos, metrosQuadrados, preco);
    this.andar = andar;
    this.ajustaPreco = function() {
        this.preco = this.preco + (this.preco * (0.1 * this.andar));
    };
    this.ajustaPreco();
}

Object.assign(Apartamento.prototype, new Casa());

function CasaDeLuxo(quartos, metrosQuadrados, preco, temPiscina) {
    Casa.call(this, quartos, metrosQuadrados, preco);
    this.temPiscina = temPiscina;
    this.precoFinal = function() {
        return this.temPiscina ? this.preco * 1.5 : this.preco;
    };
}

Object.assign(CasaDeLuxo.prototype, new Casa());

const casa1 = new Casa(4, 100, 20000);
const apartamento1 = new Apartamento(3, 80, 15000, 2);
const casaDeLuxo1 = new CasaDeLuxo(5, 150, 50000, true);

console.log(casa1.precoPorMetroQuadrado()); 
console.log(apartamento1.preco); 
console.log(casaDeLuxo1.precoFinal()); 
