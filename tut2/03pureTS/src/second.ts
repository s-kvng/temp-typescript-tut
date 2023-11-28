interface TakePhoto{
    cameraMode: string
    filter: string 
    burst: number
}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto{

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){

    }
    
}

const n = new Instagram("m",'m',2)
console.log(n)

class Youtube implements TakePhoto,  Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("Story created")
    }
}

