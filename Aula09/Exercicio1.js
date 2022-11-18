const circulo = {
    raio: 3,
    area(){
        return Math.PI * this.raio * this.raio;
    },
    perimetro(){
        return 2 * Math.PI * this.raio;
    }
}
console.log(circulo.area());
