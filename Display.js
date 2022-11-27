class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.memoryRegister = [];
        this.memoryStore = [];
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: '*',
            restar: '-',
            porcentaje: '%',
        }
    }

    borrarUltimo() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarAnterior() {
        this.valorAnterior = this.valorActual.toString().slice(0, 1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    //Raices

    raiz2() {
        this.valorActual = Math.sqrt(this.valorActual).toString();
        this.imprimirValores();
    }

    raiz3() {
        this.valorActual = Math.pow(this.valorActual, 1 / 3).toString();
        this.imprimirValores();
    }

    raizN() {
        this.valorActual = Math.pow(this.valorAnterior, 1 / this.valorActual).toString();
        this.imprimirValores();
    }

    //Exponentes

    potencia2() {
        this.valorActual = Math.pow(this.valorActual, 2).toString()
        this.imprimirValores();
    }

    potencia3() {
        this.valorActual = Math.pow(this.valorActual, 3).toString();
        this.imprimirValores();
    }

    potenciaN() {
        this.valorActual = Math.pow(this.valorAnterior, this.valorActual).toString();
        this.imprimirValores();
    }

    //Logaritmos

    ln() {
        this.valorActual = Math.log(this.valorAnterior) / Math.log(this.valorActual).toString();
        this.imprimirValores();
    }

    log2() {
        this.valorActual = Math.log2(this.valorActual).toString();
        this.imprimirValores();
    }

    //Tangente

    tg() {
        let radian = this.valorActual.toString();
        this.valorActual = Math.tan(radian).toString();
        this.imprimirValores();
    }

    //Porcentaje

    porcentaje() {
        this.valorActual = ((this.valorAnterior * this.valorActual) / 100).toString();
        this.imprimirValores();
    }

    //Pi

    pi() {
        this.valorActual = Math.PI.toString();
        this.imprimirValores();
    }

    //Memory Store, Memory Register y Memory Clear.

    MS() {
        let nuevoValor = this.memoryStore;
        nuevoValor.splice(0, 0, this.valorActual);
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';       
    }


    MR() {
        let mostrarValores = this.memoryStore;
        mostrarValores.toString();
        this.memoryRegister = mostrarValores;
        this.valorAnterior = this.memoryRegister;
        this.imprimirValores();
        console.log(" mostrar valores MR " + mostrarValores);
    }

    MC() {
        this.borrarTodo();
        this.memoryStore = [];
        this.imprimirValores();
    }

    /******************/

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        //valor default.
        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

}