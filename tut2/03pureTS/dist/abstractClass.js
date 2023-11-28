"use strict";
class TakePhot {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReels() {
        //some complex calculations 
        return 5;
    }
}
// const na = new TakePhoto("testing", "test")
class Insta extends TakePhot {
    constructor(// its own constructor incase you want add an addditional parameter
    cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const na = new Insta("testing", "test", 4);
na.getReels();
