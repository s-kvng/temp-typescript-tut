abstract class TakePhot{
    constructor(
        public cameraMode: string ,
        public filter: string,
    ){}

    abstract getSepia(): void

    getReels(): number{ // advantage of abstract class over interface (methods can be initially implemented)
        //some complex calculations 
        return 5
    }
}

// const na = new TakePhoto("testing", "test")

class Insta extends TakePhot{
    constructor(// its own constructor incase you want add an addditional parameter
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode , filter)
    }

    getSepia(): void {
        console.log("Sepia");
        
    }
}

const na = new Insta("testing", "test", 4)
na.getReels()