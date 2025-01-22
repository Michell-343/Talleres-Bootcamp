//ES Modules forma nueva

export const sumar=(a,b)=> a+b;
export const restar=(a,b)=> a-b;
export const multiplicar=(a,b) => a*b;
export const dividir=(a,b)=>{
    let result = 0
    if (b == 0){
        result = "No se puede dividir por 0"
        return result
    } else{ result = a/b
        return result
    }
}


