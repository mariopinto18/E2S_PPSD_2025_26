// FICHA 01


// Ex1
celcius = +prompt("Indique a temperatira em ºCelsius:")
let Fahrenheit = 1.8 * celcius + 32

console.log(`ºFahrenheit: ${Fahrenheit}`)


// EX2
let nome    = prompt("Nome:")
let apelido = prompt("Apelido:")
console.log(`${apelido}, ${nome}`)


// Ex3
const desconto = 0.1
let precoProduto = +prompt("Preço do produto:") 
precoProduto= (precoProduto* 0.9) * 1.23
alert(`O preço final da sapatilhas é ${precoProduto}`)


// EX4
let segundos = +prompt("Nº de Segundos:")

let horas = parseInt(segundos / 3600)  // HORAS
console.log(horas)
tempo= segundos - horas*3600   // vou subtrair as horas convertidas em segundos

minutos = parseInt(tempo / 60)   // MINUTOS

segundos= tempo - minutos*60
alert(`${horas}h, ${minutos}m, ${segundos}s`)

