// EXERCICIOS DO NÍVEL 2

// EX1


generos = ['M', 'F']

altura = +prompt("Indique a sua altura em cm:")
genero = prompt("Indique o seu género (M/F)")
let pesoIdeal

if (generos.includes(genero) ) {    // Se o genero inseriro no prompt existe no array 
    if (genero == "M") {
        pesoIdeal= (altura-100) * 0.90
    }
    else {
        pesoIdeal= (altura-100) * 0.85
    }
    alert(`O seu Peso ideal é ${pesoIdeal}`)
}
else {
    alert("O género indicado não está correto")
}


// EX2
numero = +prompt("Indique um número")
if (numero % 2 == 0) {    // se resto = 0, é par
    console.log(`O número ${numero} é par`) 
}
else {
    console.log(`O número ${numero} é ímpar`) 
}


// EX3
mes = +prompt("Indique o número do mês")
switch (mes)
{
    case 1: console.log('Janeiro, 31 dias')
            break;
    case 2: console.log('Fevereiro, 28 dias')
            break;
    case 3: console.log('Março, 31 dias')
            break;
    // ... Continuar até 12        
    default: console.log('Indique um número entre 1 e 12')
}


// Ex4
numero1 = +prompt("Indique um número")
numero2 = +prompt("Indique um número")
numero3 = +prompt("Indique um número")

if ((numero1 < numero2) && (numero1 < numero3)) {   // primeiro é o MENOR deles
   console.log(numero1)
   if (numero2 < numero3) {   // encontra o segundo menor, entre o numero2 e o numero3
     console.log(numero2, numero3)
   }
   else {
    console.log(numero3, numero2)
   }
}
else if ((numero2 < numero1) && (numero2 < numero3)) {   // numero2 é o MENOR
     console.log(numero2)
     if (numero1 < numero3) {       // encontra o segundo menor, entre o numero1 e o numero3
        console.log(numero1, numero3)
      }
      else {
       console.log(numero3, numero1)
      }
}
else {
    console.log(numero3)
    if (numero1 < numero2) {
        console.log(numero1, numero2)
      }
      else {
       console.log(numero2, numero1)
      }
}





