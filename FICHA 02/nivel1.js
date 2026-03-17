// Javascript


// Lê 10 numeros e devolve o maior e a média
function calcMaiorMedia() {

    let maior = -Infinity  // Menor numero possivel, - infinito

    let soma=0
    for(let i=0; i<10; i++) {
        let numero = +prompt(`Indique o ${i+1}º numero: `)
        soma+=numero
        // determinar o menor valor
        if (numero > maior) {
            maior = numero
        } 

    }
    
    console.log(`A média é: ${soma/10}`)

    console.log(`O maior número é: ${maior}`)


}


calcMaiorMedia()