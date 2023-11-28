let score: number| string = 33
score = 44
score = "55"

type User = {
    name : string,
    id: number
}

type Admin = {
    username : string,
    id: number
}

type un = string | number

let nathan: User | Admin = {name: "Nathan", id:343}
//OR
nathan = {username:  "Nat" , id: 321}


function getObjId(id: number | string){
    //make API calls
    console.log(`DB Id is: ${id}`);
}
getObjId(3)
getObjId("5")


function getId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

//array
const data: number[] = [1,2,3]
const data2: string[] = ["2","yes"]
const data3: (number | string )[] = [1, 2, "yes"]

//
let seatAllotment: "alise" | "window" | "middle"

seatAllotment = "alise"
seatAllotment = "window"
