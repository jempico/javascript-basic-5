
//NIVELL 1

//Task 1
const promise = new Promise ((resolve, reject) => {
    const condition = true;
    if (condition) {
        resolve('This promise was resolved');
    } 
    else {
        reject('This promise was rejected');
    }
})

promise
    .then((res) => console.log(`Result of task 1 is : "${res}"`))
    .catch((err) => console.log(`Result of task 1 is : "${err}"`))


//Task 2

const callMom = (condition, callback) => {
    if (condition) {
        callback(`Mom says she's fine`);
    } else {
        callback(`Mom didn't answered the phone`);
    }
}

callMom(false, (msg) => { console.log(`Result of task 2 is : "${msg}"`)} ) ;


//NIVELL 2 I 3


let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
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
        for (let obj of employees) {
            if (obj.id === num) {
                resolve(obj);
            } else {
                reject('Employee not found');
            }
        }
    })     
}



const getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        for (let obj of salaries) {
            if (obj.id === employee.id) {
                resolve(obj.salary);
            } else {
                reject('Salary not found');
            }
        }
    })
}

getEmployee(1)
    .then((res) => { return getSalary(res)})
    .then((res) => console.log(`Result of Task 3 is "Salary found: ${res}"`))
    .catch((error) => console.log(error))