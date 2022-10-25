export function Media(notas){
    let somaNotas = 0;
    for(let i = 0; i < notas.length; i++){
        somaNotas += notas[i]
    }
    return somaNotas / notas.length
}