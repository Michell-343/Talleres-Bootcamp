     // 1. Calculadora
     function calculadora(a, b, operador) {
        function sumar() {
            return a + b;
        }
        function restar() {
            return a - b;
        }
        function multiplicar() {
            return a * b;
        }
        function dividir() {
            if (b !== 0) return a / b;
            else return 'Error, no se puede dividir por 0';
        }

        switch (operador) {
            case '+':
                return sumar();
            case '-':
                return restar();
            case '*':
                return multiplicar();
            case '/':
                return dividir();
            default:
                return 'Operador inválido';
        }
    }

    // 2. Contar números pares hasta n veces y sumarlos 
    function contarParesYSumar(n) {
        let suma = 0;
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                suma += i;
            }
        }
        return suma;
    }

    // 3. Verificar si un número es primo
    function esPrimo(numero) {
        if (numero <= 1) return "no";
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) return "no";
        }
        return "si";
    }

    // 4. Encontrar el número más grande en un arreglo
    function encontrarMaximo(arreglo) {
        return Math.max(...arreglo); //metodo de javascript. el ... es operador de propagación para descomponer el arreglo
        
    }

    // 5. Verificar si un número está en un arreglo
    function estaEnArreglo(numero, arreglo) {
        return arreglo.includes(numero);
    }

    // Menú 
    function menuPrincipal() {
        const opcion = prompt(`Seleccione una opción:\n1. Calculadora\n2. Suma de números pares\n3. Verificar número primo\n4. Encontrar el número más grande en un arreglo\n5. Verificar si un número está en un arreglo`);
        switch (opcion) {
            case '1':
                const a = parseFloat(prompt('Ingrese el primer número:'));
                const b = parseFloat(prompt('Ingrese el segundo número:'));
                const operador = prompt('Ingrese el operador (+, -, *, /):');
                alert(`Resultado: ${calculadora(a, b, operador)}`);
                break;
            case '2':
                const n = parseInt(prompt('Ingrese un número hasta el cual sumar los pares:'));
                alert(`Suma de pares hasta ${n}: ${contarParesYSumar(n)}`);
                break;
            case '3':
                const numeroPrimo = parseInt(prompt('Ingrese un número para verificar si es primo:'));
                alert(`¿Es ${numeroPrimo} primo?: ${esPrimo(numeroPrimo)}`);
                break;
            case '4':
                const arregloMax = prompt('Ingrese los números del arreglo separados por comas:').split(',').map(Number);
                alert(`El número más grande es: ${encontrarMaximo(arregloMax)}`);
                break;
            case '5':
                const arregloBuscar = prompt('Ingrese los números del arreglo separados por comas:').split(',').map(Number);
                const numeroBuscar = parseInt(prompt('Ingrese el número que desea buscar:'));
                alert(`¿Está el número ${numeroBuscar} en el arreglo?: ${estaEnArreglo(numeroBuscar, arregloBuscar)}`);
                break;
            default:
                alert('Opción no válida.');
        }
    }