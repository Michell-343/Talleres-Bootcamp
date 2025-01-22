//CommonJS (CJS) forma antigua

const sumar=(a,b)=> a+b;
const restar=(a,b)=> a-b;
const multiplicar=(a,b) => a*b;
const dividir=(a,b)=>{
    let result = 0
    if (b == 0){
        result = "No se puede dividir por 0"
        return result
    } else{ result = a/b
        return result
    }
}

module.exports = {sumar,restar,multiplicar,dividir};