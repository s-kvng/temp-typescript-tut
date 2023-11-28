const score: Array<string> = []
const marks: Array<number> = []

function identityOne(val: string): string {
    return val
}

function identityTwo(val: any): any{
    return val;
}

function identityThree<Type>(val: Type): Type{// normal way of writing generics
    return val;
}
// identityThree(3)

function identityFour<T>(val: T): T{// shortcut way of writing generics
    return val;
}

interface Bootle{
    brand: string
    type: number
}

const bootle ={
    brand : "lame",
    type: 6,
}

identityFour<Bootle>(bootle) // using your own custom type

function getSearchProducts<T>(products: T[]): T{
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
     //do some database operations
     const myIndex = 4
     return products[myIndex]
}


function anotherFunction<T, U>(valOne:T , valTwo:U): object{
    return {
        valOne,
        valTwo
    }
}

//Generic class

interface Quiz{
    name : string,
    type : string 
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

