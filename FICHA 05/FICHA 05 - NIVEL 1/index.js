// Importa modulo dados.js
import * as data from "./dados.js";

// declara array employees
let employees = []
// invoca função data (módulo dados.js) para preencher automaticamente array de objetos
employees = data.init();



// RESOLUÇÂO FICHA 05 - NIVEL 1
// 1. 
function showEmployees() {

    for (let employee of employees) {   // Iterar os objetos do array
         alert(`nome: ${employee.name} 
              salário: ${employee.salary} 
              cidade: ${employee.city} 
              departamentos: ${employee.departments} 
            `);
    }
}

//showEmployees()

//2. 
function totalSalaries() {
    /*
    let total=0
    for (let employee of employees) {   // Iterar os objetos do array
        total+= employee.salary
    }
    alert(`Total salarios = ${total}`)    
    */
    totalSalaries= employees.reduce((total, employee) => total+employee.salary, 0)
    alert(totalSalaries)
    return totalSalaries
}
//totalSalaries()


//3. 
function averageSalaries() {
    alert(totalSalaries/employees.length)
}
//averageSalaries()

//4. Filtrar funcionarios da cidade do Porto

function filterEmployees() {

    // Filtrar
    let filteresdList= employees.filter(element => element.city == "Matosinhos")

    // imprimir a lista

    for (let element of filteresdList) {
        console.log(element.name, element.city)

    }
    ///  OU    ----------
    filteresdList.forEach(element => { 
        console.log(element.name, element.city)
        
    });
}

//filterEmployees()


//5.   
function verifyEmployee(nome) {

    console.log(employees.some(element => element.name == nome))

}
//verifyEmployee('Maria Carla Pereira')
//verifyEmployee('Carlos Manuel')


//6.
function verifySalaries(salario) {

    console.log(employees.some(element => element.salary < salario))

}
verifySalaries(1500)


//7. Sort descendente
function ordenarArray() {

    let employeesSorted = employees.sort((a,b) => (a.name > b.name ? -1: 1) )
    //employeesSorted.reverse()
    employeesSorted.forEach(element => { console.log(element.name) })
        
} 
ordenarArray()



//8. Filtrar employees do departamento Health 

console.log('employees do departamento Health:')
const employeesList = employees.filter(element => element.departments.includes("Health"))
for (let employee of employeesList) {
    console.log(employee.name)
}

 //9.  acrescentar propriedade segSocial
  // está implementado no objeto - folha dados.js


  // Se quisesse calcular a segurança social a partir dos objetos,
  // tal como estavam definidos, faria assim:
  for (let employee of employees) {
        employee = employee.segSocial= function() {
            return (`${this.salary}` *.11)
  }
}
