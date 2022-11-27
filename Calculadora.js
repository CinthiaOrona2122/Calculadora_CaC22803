class Calculadora {
   
    //Operaciones con 2 numeros

    sumar(num1, num2) {
        return eval(num1 + num2);
    }

    restar(num1, num2) {
        return eval(num1 - num2);
    }

    dividir(num1, num2) {
        return eval(num1 / num2);
    }

    multiplicar(num1, num2) {
        return eval(num1 * num2);
    }

    //Pi

    pi(num1){
        return Math.pi(num1);
    }


    //Tangente

    tg(num1){
        return Math.tan(num1);
    }

    //Seno de angulos

    sin(num1){
        return Math.sin(num1);
    }

    cos(num1){
        return Math.cos(num1);
    }
    
    //Logaritmos

    ln(num1, num2){
        return Math.log(num1) / Math.log(num2);
    }

    log2(num1){
        return Math.log2(num1);
    }

} 