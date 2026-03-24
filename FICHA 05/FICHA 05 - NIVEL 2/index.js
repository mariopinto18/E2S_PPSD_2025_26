// Javascript


let CT, HDL, TG, LDL
const formCardio = document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    CT = document.getElementById('txtColesterol').value;
    HDL = document.getElementById('txtHDL').value 
    TG = document.getElementById('txtTG').value

    LDLvalue = CT  - HDL  - 0.2*TG

    LDL = document.getElementById('txtLDL').value = LDLvalue

});

const btn = document.getElementById('btnAddTable').addEventListener('click', function(event){
     addTable(CT, HDL, TG, LDL)
})

 

function  addTable(CT, HDL, TG, LDL) {

    let risco = ""
    if (LDL <70 ) {
        risco = "Risco Coronário alto"
    }
    else if (LDL < 100) {
        risco = "risco coronariano médio"
    }
    else
    {
         risco = "risco coronariano baixo"
    }

    tabela = document.querySelector('.table')
    tabela.innerHTML += `
        <tr class = "data">
                <td>${CT}</td>
                <td> ${HDL}</td>
                <td>${TG}</td>
                <td>${LDL}</td>
                <td>${risco}</td>
        </th>         
    `

}

