//Always remember to perform checks for these kinds of situations

function detectType(val: number | string ){
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID")
        return
    }
    return id.toLowerCase()
}

function printAll(strs: string | string[] | null){
    //never do this , else check of an empty string becomes problematic
    //read the documentation on narrowing for more understanding 

    if(strs){

    }
}

// "in" operator use cases in TS

interface User{
    name : string ,
    email: string
}

interface Admin extends User{
    isAdmin: boolean
}

const systemAccount = (account: User | Admin) =>{
    if ("isAdmin" in account) {
        return account.isAdmin 
    }

}
