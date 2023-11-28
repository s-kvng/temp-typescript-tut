console.log("typescript is here")
console.log("Typescript is amazing");

const handleClick = (num: number) => {
    console.log(`The number is ${num}`);
}

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
    protected _courseCount: number = 1
    
    readonly city: string = "Koforidua"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string 
    ){}

    private deleteToken(){
        console.log("Token deleted");
        
    }

    get getAppleEmail(): string{
        return `Apple${this.email}`
    }

    get getCourseCount(): number{
        return this._courseCount
    }

    set setCourseCount(courseNum: number){
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one");
            
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const nathan = new User("n@n.com", "Nat")
const kwame = new SubUser("k@k", "kwame")
// nathan.city = "Accra"
