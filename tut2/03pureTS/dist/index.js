"use strict";
console.log("typescript is here");
console.log("Typescript is amazing");
const handleClick = (num) => {
    console.log(`The number is ${num}`);
};
// class User {
//     public email: string 
//     private name: string 
//     readonly city: string = "Koforidua"
//     constructor(email: string, name: string ){
//         this.email = email;
//         this.name = name ;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Koforidua";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `Apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const nathan = new User("n@n.com", "Nat");
const kwame = new SubUser("k@k", "kwame");
// nathan.city = "Accra"
