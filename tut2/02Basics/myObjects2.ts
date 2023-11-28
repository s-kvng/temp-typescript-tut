// type User = {
//     name : string ,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "nathan", email: "", isActive: true}
// }

// const userData = {name: "nathan", email: "", isActive: true}
// createUser(userData)

type User ={
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: cardDetails // "?" at the end means it can either be undefined or a number
}

type cardNumber = {
    cardnumber: string 
}

type cardDate = {
    cardDate: string 
}

type cardCvv = {cvv: number}

type cardDetails = cardNumber & cardDate & {
    cvv: number 
}

let myUser: User ={
    _id: "1234",
    name: "Nathan",
    email: "n@mail.com",
    isActive: true,
    creditCardDetails: {cardnumber: "", cardDate : "" , cvv: 5}
}

console.log(myUser.creditCardDetails?.cardnumber);
myUser.name = "nat"
// myUser._id = "1455"  will throw an error