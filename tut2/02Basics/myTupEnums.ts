// const user: (string | number )[] = [1 , "hc"]
let user: [string , number , boolean] // how to strictly specify the order of the array
user = ["nat", 343 , true]

let rgb: [number , number , number] = [255 , 153 , 123] 

//can also use it as a type 
type User = [number ,string]
const newUser: User = [122, "exam@gmail.com"]

//some downsides 
newUser[1] = "nam@gmail.com" // allows changing of values
newUser.push("malfunction") // can still use all array methods 