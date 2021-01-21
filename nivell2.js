let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];



const getEmployee = (num) => {
    return new Promise((resolve, reject) => {
      
            let found = ''
            employees.some( el => el.id === num ? found = el : found = '' )
            if (found) {
             resolve(found);
            } else {
              reject(`Employee not found`);
            }
          
    })     
}



const getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        
        let found = ''
        salaries.some( el => el.id === employee.id ? found = el.salary : found = '' )
        if (found) {
         resolve(found);
        } else {
          reject(`Salary not found`);
        }
    })
}

getEmployee(3)
    .then((res) => { return getSalary(res)} )
    .then((res) => console.log(`Result of Task 3 is "Salary found: ${res}"`))
    .catch((error) => console.log(error))