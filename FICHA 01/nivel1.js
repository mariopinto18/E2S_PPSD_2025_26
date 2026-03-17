// EX01


function converterTemp() {
    /// converte tenperatira em ºCelsius em ºFahrenheit:  ºF = 1.8 * ºC + 32 
    tempCelsius = +prompt("Indique a temperatura ºC:")
    tempFahrenheit = 1.8*tempCelsius+32
    alert(`Temperatura em ºF: ${tempFahrenheit}`)
    console.log(`Temperatura em ºF: ${tempFahrenheit}`)
}


function apelidoNome() {
    nome = prompt("Inique o nome:")
    apelido = prompt("Inique o aplelido:")
    console.log(`${apelido}, ${nome}`)
}

function precoFinal() {
    preco = +prompt("Indique o preço das sapatilhas:")
    precoDesc = preco - preco*0.10   // Desconto de 10%
    preco = precoDesc * 1.23    // aplica-se 23% do IVA
    alert(`o preço final das sapatilhas é de ${preco}€`)
}

function converteSegundos() {

    segundos = +prompt("Indique o valor em segundos:")
    horas = parseInt(segundos / 3600)     // Obtenho o numero de horas (valor inteiro)

    segundos = segundos - horas*3600   // Nº de segundops depois de subtrair as horas calcyuladas 
    minutos = parseInt(segundos/60)     // nº de minutos

    segundos = segundos - minutos*60
    console.log(horas, minutos, segundos)
}

//converterTemp()
//apelidoNome()
//precoFinal()
converteSegundos()