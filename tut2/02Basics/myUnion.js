var score = 33;
score = 44;
score = "55";
var nathan = { name: "Nathan", id: 343 };
//OR
nathan = { username: "Nat", id: 321 };
function getObjId(id) {
    //make API calls
    console.log("DB Id is: ".concat(id));
}
getObjId(3);
getObjId("5");
function getId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["2", "yes"];
var data3 = [1, 2, "yes"];
//
var seatAllotment;
seatAllotment = "alise";
seatAllotment = "window";
