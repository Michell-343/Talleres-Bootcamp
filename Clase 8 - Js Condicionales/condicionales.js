function edadvotar(event) {
    event.preventDefault();

    let edad = prompt("Digite la edad");

    if (edad >=18) {
        alert ("Puedes votar")
    }else{
        alert ("Aun no puedes votar")        
    }
}

function conducir(event) {
    event.preventDefault();

    let edad = prompt("Digite la edad");

    if (edad >=18) {
        alert ("Puedes conducir")
    }else{
        alert ("No puedes conducir")        
    }
}

function par(event) {
    event.preventDefault();

    let numero = prompt("Ingrese un número");

    if (numero % 2 === 0) {
        alert ("El número "+numero+" es par.")
    }else{
        alert ("El número "+numero+" es impar.")    
    }
}

function mayoredad(event) {
    event.preventDefault();

    let edad = prompt("Digite su edad");

    if (edad >=18) {
        alert ("Eres mayor de edad")
    }else{
        alert ("Eres menor de edad")        
    }
}


function aprobado(event) {
    event.preventDefault();

    let nota = prompt("Digite su calificación");

    if (nota >=6) {
        alert ("Su calificación es: "+nota+". Has aprobado");
    }else{
        alert ("Su calificación es: "+nota+". Has reprobado") ;   
    }
}

function positivo(event) {
    event.preventDefault();

    let numero = prompt("Ingrese un número");

    if (numero >=1) {
        alert ("El número "+numero+" es positivo.");
    }else if (numero <0) {
            alert ("El número "+numero+" es negativo.");
      }  else {
                alert ("El numero es 0");
            }
    }

    function decuento(event) {
        event.preventDefault();
    
        let edad = prompt("Ingrese su edad");
    
        if (edad <18 || edad>65 ) {
            alert ("Aplica el descuento");
        } else
              alert ("No aplica el descuento");
    }

    function estacion(event) {
        event.preventDefault();

        let mes = prompt("Ingrese su un numero del 1 al 12");

        if (mes ==12 || mes==1 || mes==2) {
            alert ("Invierno");
        } else if (mes >= 3 && mes <= 5) {
            alert ("Primavera");
        } else if (mes >= 6 && mes <= 8) {
            alert ("Verano");
        } else if (mes >= 9 && mes <= 11) {
            alert ("Otoño");
        } else {
            alert ("No es un mes, digite un número entre 1 y 12.");
        }
    }

    function invitacion(event) {
        event.preventDefault();
    
        let invitacion = prompt("¿Tiene invitación? \n 1. Si \n 2. No tengo invitación");
        switch (invitacion){
            case "1":
                alert("Puedes asistir");
                break;
            case "2":
                alert("No puedes asistir");
                break;
        }
    }

    function bisiesto(event) {
        event.preventDefault();

     let fecha = prompt("Digite un año");

        if ((fecha % 4 == 0 && fecha % 100 != 0) || fecha % 400 == 0) {
            alert(fecha+" es un año bisiesto");
        } else {
            alert(fecha+" no es un año bisiesto");
        }
    }

    function alcohol(event) {
        event.preventDefault();
    
        let edad = prompt("Digite la edad");
    
        if (edad >=18) {
            alert ("Puedes comprar alcohol")
        }else{
            alert ("No puedes comprar alcohol")        
        }
    }

    function personaedad(event) {
        event.preventDefault();
    
        let edad = prompt("Ingrese su edad");
    
        if (edad >=18 && edad<=35 ) {
            alert ("Es un adulto joven");
        } else if (edad >=36 && edad<=64 ){
            alert ("Un adulto");
        } else if (edad >64 ){
        alert ("Es una persona mayor");
        } else {
          alert ("Es menor de edad");
    }
}