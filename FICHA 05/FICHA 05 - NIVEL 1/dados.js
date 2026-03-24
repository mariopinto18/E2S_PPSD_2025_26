// OBJECTS

let employees = []

export function init() {
// Object that describes a person
let  employee = { 
        name: 'Maria Carla Pereira',
        nif: 111222333,
        salary: 2800,
        city: 'Porto',
        departments: ['CEO', 'Supervisor'], 
        segSocial: function() {
            return (`${this.salary}` *.11)
        }
    }
employees.push(employee)
//------------------------
employee = { 
        name: 'Carlos Manuel Costa',
        nif: 234567890,
        salary: 1750,
        city: 'Maia',
        departments: ['Production'],
        segSocial: function() {
            return (`${this.salary}` *.11)
        }
    }
employees.push(employee)
//---------------------------
employee = { 
    name: 'Isabel Maria Teixeira',
    nif: 334567890,
    salary: 1950,
    city: 'Matosinhos',
    departments: ['Informatics', 'Health'],
    segSocial: function() {
            return (`${this.salary}` *.11)
        }
   
}
employees.push(employee)
//---------------------------
employee = { 
    name: 'Vasco Manuel Carvalho',
    nif: 434567890,
    salary: 2150,
    city: 'Matosinhos',
    departments: ['Informatics', 'Health'],
    segSocial: function() {
            return (`${this.salary}` *.11)
        }
}
employees.push(employee)

//---------------------------
employee = { 
    name: 'Margarida Maria Matos',
    nif: 112233440,
    salary: 2250,
    city: 'Matosinhos',
    departments: ['Health'],
    segSocial: function() {
            return (`${this.salary}` *.11)
        }
}
employees.push(employee)



return employees
}