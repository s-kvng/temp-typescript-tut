const User = {
    name : "Nathan",
    email: "nathan@gmail.com",
    isActive: true
}

function createUser({name : string , isPaid : boolean}){}
let newUser = {name:2, isPaid: false, email : "n@mail.com" }
createUser(newUser)

// function createCourse():{}{
//     return {}
// }

function createCourse():{name : string , price: number}{
    return {name: "Nathan", price: 3}
}

export {}