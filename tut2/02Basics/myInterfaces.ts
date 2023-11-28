interface User{
    readonly dbId: number, 
    email : string ,
    userId : number,
    googleId?: string,
    // startTrail : () => string
    startTrail(): string //simpler method declaration
    getCoupon(couponName: string, off : number): number
}

// an advantage of an interface is the reopening of the interface or simply just adding more values
interface User {
    githubToken: string 
}

//Another advantage of interface is the ability to inherit( inheritance )
interface Admin extends User{
    role: "admin" | "staff" | "HOD"
}

let dr: Admin = {dbId : 123 , email: "n@n.com" , userId : 5, githubToken: "s-kvng",
role: "admin", 
startTrail : ()=>{
    return "trail started"
} , 
    getCoupon : (name : "nat10", off : 10) =>{
        return 20
    }
}

let kvng: User = {dbId : 123 , email: "n@n.com" , userId : 5, githubToken: "s-kvng", 
startTrail : ()=>{
    return "trail started"
} , 
    getCoupon : (name : "nat10", off : 10) =>{
        return 20
    }
}

kvng.userId = 234