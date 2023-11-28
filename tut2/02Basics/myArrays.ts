const superHeros: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []

type User = {
    name: string ,
    isActiv: boolean
}

const allUsers: User[] = [] 
allUsers.push({name:'nath', isActiv:false})


superHeros.push("Spiderman")

const MLModels: number[][] = [ //an array of numbers in an array
    [255,255,255],
    [155,155,155]
]

function getReadOnly(values: ReadonlyArray<number>){ // example of a read only array in action
    console.log(`This is the first value in the array ${values[0]}`)
}