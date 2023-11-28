function addTwo(num: number){
    return num + 2;
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name: string , email: string , isPaid: boolean){
}

let loginUser = (name: string , email : string , isPaid: boolean = false) => {
}

function add(num:number): number{
    return num + 2
    // return "hello"
}

function getValue(myVal: number): (string | boolean){
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}

const getHello = ( s : string ): string =>{
    return ""
}

const heros = ["thor" , "spiderman", "ironman "]
heros.map((hero: string) : string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(msg: string): never{
    throw new Error(msg);
}

addTwo(4)
getUpper("Nathan")
signUpUser("Nathan","kvng@gmail.com",true)
loginUser("N" , "N@gmail.com")

export {}