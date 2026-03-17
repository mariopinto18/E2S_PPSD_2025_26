// JavaScript

/**
 * Submit event listener
 */

    // por omissão colocar genero a Masculino ou a Feminino
    document.getElementById('idGenero').value= "Masculino"

    // Obter o formulário e respetivos dados

    const fromTMB = document.getElementById("idForm")

    fromTMB.addEventListener('submit', function(event) {     // evento submeter o formulário
            event.preventDefault();
            // Obter dados do formulário
            genero = document.getElementById('idGenero').value
            altura = document.getElementById('txtAltura').value
            peso = document.getElementById('txtPeso').value
            idade = document.getElementById('txtIdade').value
            // Invocar função para calculçar TMB
            tmb = calcTMB(genero, altura, peso, idade)
            // associar valor de TMB ao campo do formulário
            document.getElementById('txtTMB').value = tmb
    })


function calcTMB(genero, altura, peso, idade) {

    if (genero == "Masculino") {
            tmb = 10 * peso + 6.25 * altura - 5 * idade  + 5
    }
    else {
        tmb = 10 * peso + 6.25 * altura - 5 * idade  - 161
    }
    return tmb
}


























document.querySelector('#idForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let genero  = document.getElementById('idGenero').value
    let altura = document.getElementById('txtAltura').value
    let peso = document.getElementById('txtPeso').value
    let idade = document.getElementById('txtIdade').value
    let tmb = calcTMB(genero,altura, peso, idade )
    document.getElementById('txtTMB').value =  tmb
   
       
})


// calcula LDL
function  calcTMB(genero,altura, peso, idade ) {
    let tmb
    if (genero == "Feminino") {
        tmb = 10*peso + 6.25*altura + 5*idade -161
    }
    else
    {
        tmb = 10*peso + 6.25*altura + 5*idade + 5
    }
    return tmb
}



