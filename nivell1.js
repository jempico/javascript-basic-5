
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