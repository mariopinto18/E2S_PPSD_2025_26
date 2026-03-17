// JavaScript da Ficha 03




// receber n cidades e imp+rimir na copnsola o nº de cidades
function numCities() {
    console.log("Nº de cidades: ", arguments.length)

    // iterar o array arguments que contém as cidades passadas como argumento da função
    for (cidade of arguments) {
        console.log(cidade)    // Imprimir na consola cada uma das cidades
    }

}

//invocar a função com diferentes argumentos,. para testar
numCities("Porto")
numCities("Porto", "Matosinhos")
numCities("Porto", "Matosinhos", "Maia", "V.N.Gaia")






function palindromo(numero) {

    let valor = numero.toString()   // converter o numero para Textro
    
    if (valor[0] == valor [2]) {    // como o numero, em strring, tem 3 caracteres, basta comparar 
                                    // a posição 0 com a 2.
        console.log(numero, "É um Palindromo")
    }
    else {
        console.log(numero, "Não um Palindromo")

    }


}


palindromo(121)     // True
palindromo(345)     // False
palindromo(555)    // True