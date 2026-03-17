// IMC

function calcIMC() {
    peso = +prompt("Indique o peso (Kg):")
    altura = +prompt("Indique a altura (m):")

    imc = peso / (altura * altura)
    imc = imc.toFixed(2)
    if (imc < 18.5 ) {
        alert(`IMC = ${imc}, Abaixo do peso`)
    }
    else if (imc < 24.9) {
        alert(`IMC = ${imc}, Peso normal`)
    }
    else if (imc < 29.9)
        alert(`IMC = ${imc}, Excesso de peso`)
    else if (imc < 35)
        alert(`IMC = ${imc}, Obesidade`)
    else
        alert(`IMC = ${imc}, Obesidade Extrema`)
    }


calcIMC()